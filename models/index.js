// Imports
const Answer = require("./Answer");
const Question = require("./Question");
const Quiz = require("./Quiz");
const Score = require("./Score");
const User = require("./User");

// One user has many quizzes
User.hasMany(Quiz, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Quiz.belongsTo(User, {
  foreignKey: "userId",
});

// One quiz has many questions
Quiz.hasMany(Question, {
  foreignKey: "quizId",
  onDelete: "CASCADE",
});

Question.belongsTo(Quiz, {
  foreignKey: "quizId",
});

// One question has many answers
Question.hasMany(Answer, {
  foreignKey: "questionId",
  onDelete: "CASCADE",
});

Answer.belongsTo(Question, {
  foreignKey: "questionId",
});

// One quiz has many scores
Quiz.hasMany(Score, {
  foreignKey: "quizId",
  onDelete: "CASCADE",
});

Score.belongsTo(Quiz, {
  foreignKey: "quizId",
});

// Exports
module.exports = {
  User,
  Quiz,
  Question,
  Answer,
  Score,
};
