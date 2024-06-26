// Imports
const Question = require("../models/Question");

// Question seeds
const questionSampleData = [
  // Questions of the quiz about the capitals of south american countries
  {
    question: "What is the capital of Colombia?",
    quizId: 1,
  },
  {
    question: "What is the capital of Ecuador?",
    quizId: 1,
  },
  {
    question: "What is the capital of Venezuela?",
    quizId: 1,
  },
  {
    question: "What is the capital of Peru?",
    quizId: 1,
  },
  {
    question: "What is the capital of Brazil?",
    quizId: 1,
  },
  {
    question: "What is the capital of Chile?",
    quizId: 1,
  },
  {
    question: "What is the capital of Argentina?",
    quizId: 1,
  },
  {
    question: "What is the capital of Uruguay?",
    quizId: 1,
  },
  {
    question: "What is the capital of Paraguay?",
    quizId: 1,
  },
  {
    question: "What is the capital of Bolivia?",
    quizId: 1,
  },
  // Questions of the quiz about the capitals of the states of Mexico
  {
    question: "What is the capital of the State of Quintana Roo?",
    quizId: 2,
  },
  {
    question: "What is the capital of the State of Guerrero?",
    quizId: 2,
  },
  {
    question: "What is the capital of the State of Jalisco?",
    quizId: 2,
  },
  {
    question: "What is the capital of the State of Michoacán?",
    quizId: 2,
  },
  {
    question: "What is the capital of the State of Baja California?",
    quizId: 2,
  },
  {
    question: "What is the capital of the State of Coahuila?",
    quizId: 2,
  },
  {
    question: "What is the capital of the State of Nayarit?",
    quizId: 2,
  },
  {
    question: "What is the capital of the State of Sinaloa?",
    quizId: 2,
  },
  {
    question: "What is the capital of the State of Chiapas?",
    quizId: 2,
  },
  {
    question: "What is the capital of the State of Baja California Sur?",
    quizId: 2,
  },
  // Questions of the quiz about the capitals of the states of the USA
  {
    question: "What is the capital of the State of Hawaii?",
    quizId: 3,
  },
  {
    question: "What is the capital of the State of Michigan?",
    quizId: 3,
  },
  {
    question: "What is the capital of the State of Wisconsin?",
    quizId: 3,
  },
  {
    question: "What is the capital of the State of Illinois?",
    quizId: 3,
  },
  {
    question: "What is the capital of the State of New Mexico?",
    quizId: 3,
  },
  {
    question: "What is the capital of the State of Mississippi?",
    quizId: 3,
  },
  {
    question: "What is the capital of the State of Georgia?",
    quizId: 3,
  },
  {
    question: "What is the capital of the State of Virginia?",
    quizId: 3,
  },
  {
    question: "What is the capital of the State of Pennsylvania?",
    quizId: 3,
  },
  {
    question: "What is the capital of the State of Connecticut?",
    quizId: 3,
  },
];

// Adds the question seeds to the question table of the database
async function seedQuestion() {
  await Question.bulkCreate(questionSampleData);
}

// Exports
module.exports = seedQuestion;
