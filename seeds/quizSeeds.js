// Imports
const Quiz = require("../models/Quiz");

// Quiz seeds
const quizSampleData = [
  {
    name: "Quiz about the capitals of south american countries",
    userId: 1,
  },
  {
    name: "Quiz about the capitals of the states of Mexico",
    userId: 1,
  },
  {
    name: "Quiz about the capitals of the states of the USA",
    userId: 2,
  },
];

// Adds the quiz seeds to the quiz table of the database
async function seedQuiz() {
  await Quiz.bulkCreate(quizSampleData);
}

// Exports
module.exports = seedQuiz;
