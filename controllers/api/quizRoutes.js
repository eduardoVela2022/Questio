const router = require("express").Router();
const { Quiz, Question, Answer } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Fetch quizzes with their questions and answers
    const quizzes = await Quiz.findAll({
      include: [
        {
          model: Question,
          include: [Answer],
        },
      ],
    });

    res.status(200).json(quizzes);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/", withAuth, async (req, res) => {
  const transaction = await Quiz.sequelize.transaction(); // Start transaction
  try {
    const userId = req.session.user_id;

    if (!userId) {
      res
        .status(404)
        .json({ message: "You have to be logged in to create a quiz" });
      return;
    }

    const { name, questions } = req.body;

    if (!name || !Array.isArray(questions) || questions.length === 0) {
      res.status(400).json({ message: "Invalid quiz data" });
      return;
    }

    // Insert the quiz
    const newQuiz = await Quiz.create(
      { name, userId },
      { transaction } // Associate transaction with the create operation
    );

    // Prepare questions data for bulk creation
    const questionData = questions.map((q) => ({
      question: q.question, // Ensure this matches your Question model's column name
      quizId: newQuiz.id,
    }));

    // Bulk create questions
    const newQuestions = await Question.bulkCreate(questionData, {
      returning: true,
      transaction, // Associate transaction with the bulk create operation
    });

    // Prepare answers data for bulk creation
    let answerData = [];
    newQuestions.forEach((question, index) => {
      const answers = questions[index].answers.map((answer) => ({
        answer: answer.answer,
        isCorrect: answer.isCorrect,
        questionId: question.id,
      }));
      answerData = answerData.concat(answers);
    });

    // Bulk create answers
    await Answer.bulkCreate(answerData, { transaction }); // Associate transaction with the bulk create operation

    const fullQuiz = await Quiz.findOne({
      where: { id: newQuiz.id },
      include: {
        model: Question,
        include: [Answer],
      },
      transaction, // Include transaction in the query
    });

    // Commit transaction if all operations are successful
    await transaction.commit();

    res.status(201).json(fullQuiz);
  } catch (err) {
    // Rollback transaction in case of error
    await transaction.rollback();

    console.error("Error creating quiz:", err);
    res.status(400).json({ error: err.message });
  }
});

router.put("/:id", withAuth, async (req, res) => {
  const transaction = await Quiz.sequelize.transaction();
  try {
    const userId = req.session.user_id;
    const quizId = req.params.id;
    const { name, questions } = req.body;

    // Fetch the quiz to check if the user is the owner
    const quiz = await Quiz.findOne({
      where: { id: quizId },
      include: {
        model: Question,
        include: [Answer],
      },
    });

    if (!quiz) {
      res.status(404).json({ message: "No quiz found with this id!" });
      await transaction.rollback();
      return;
    }

    if (quiz.userId !== userId) {
      res
        .status(403)
        .json({ message: "You do not have permission to update this quiz." });
      await transaction.rollback();
      return;
    }

    // Update the quiz name
    if (name) {
      await quiz.update({ name }, { transaction });
    }

    // Process existing questions
    const existingQuestions = quiz.questions;
    const existingQuestionIds = existingQuestions.map((q) => q.id);

    // Prepare updated question data
    const incomingQuestionIds = questions.map((q) => q.id).filter(Boolean);
    const questionsToUpdate = questions.filter(
      (q) => q.id && existingQuestionIds.includes(q.id)
    );
    const questionsToCreate = questions.filter((q) => !q.id);
    const questionsToDelete = existingQuestions.filter(
      (q) => !incomingQuestionIds.includes(q.id)
    );

    // Update existing questions
    for (const question of questionsToUpdate) {
      const existingQuestion = existingQuestions.find(
        (q) => q.id === question.id
      );
      await existingQuestion.update(
        { question: question.question },
        { transaction }
      );

      // Update existing answers or create new ones
      for (const answer of question.answers) {
        if (answer.id) {
          const existingAnswer = await Answer.findOne({
            where: { id: answer.id },
          });
          if (existingAnswer) {
            await existingAnswer.update(
              {
                answer: answer.answer,
                isCorrect: answer.isCorrect,
              },
              { transaction }
            );
          }
        } else {
          await Answer.create(
            {
              answer: answer.answer,
              isCorrect: answer.isCorrect,
              questionId: existingQuestion.id,
            },
            { transaction }
          );
        }
      }
    }

    // Create new questions and answers
    for (const question of questionsToCreate) {
      const newQuestion = await Question.create(
        {
          question: question.question,
          quizId: quiz.id,
        },
        { transaction }
      );

      for (const answer of question.answers) {
        await Answer.create(
          {
            answer: answer.answer,
            isCorrect: answer.isCorrect,
            questionId: newQuestion.id,
          },
          { transaction }
        );
      }
    }

    // Delete removed questions and their answers
    for (const question of questionsToDelete) {
      await Answer.destroy({
        where: { questionId: question.id },
        transaction,
      });
      await question.destroy({ transaction });
    }

    // Commit transaction
    await transaction.commit();

    // Respond with the updated quiz
    const updatedQuiz = await Quiz.findOne({
      where: { id: quizId },
      include: {
        model: Question,
        include: [Answer],
      },
    });

    res.status(200).json(updatedQuiz);
  } catch (err) {
    await transaction.rollback();
    console.error("Error updating quiz:", err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const quizId = req.params.id;
    // Fetch quizzes with their questions and answers
    const quiz = await Quiz.findOne({
      where: { id: quizId },
      include: [
        {
          model: Question,
          as: "questions",
          include: [
            {
              model: Answer,
              as: "answers",
            },
          ],
        },
        {
          model: User,
          as: "user",
        },
      ],
    });

    res.status(200).json(quiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  const transaction = await Quiz.sequelize.transaction(); // Start transaction
  try {
    const userId = req.session.user_id;
    const quizId = req.params.id;

    // Fetch the quiz to check if the user is the owner
    const quiz = await Quiz.findOne({
      where: { id: quizId },
      include: {
        model: Question,
        include: [Answer],
      },
    });

    if (!quiz) {
      await transaction.rollback();
      res.status(404).json({ message: "No quiz found with this id!" });
      return;
    }

    if (quiz.userId !== userId) {
      await transaction.rollback();
      res
        .status(403)
        .json({ message: "You do not have permission to delete this quiz." });
      return;
    }

    // Delete answers
    for (const question of quiz.questions) {
      await Answer.destroy({
        where: { questionId: question.id },
        transaction,
      });
    }

    // Delete questions
    await Question.destroy({
      where: { quizId: quiz.id },
      transaction,
    });

    // Delete the quiz
    await Quiz.destroy({
      where: { id: quiz.id },
      transaction,
    });

    // Commit transaction if all operations are successful
    await transaction.commit();
    res
      .status(200)
      .json({ message: "Quiz and its related data deleted successfully" });
  } catch (err) {
    // Rollback transaction in case of error
    await transaction.rollback();
    console.error("Error deleting quiz:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
