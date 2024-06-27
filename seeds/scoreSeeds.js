// Imports
const Score = require("../models/Score");

// Score seeds
const scoreSampleData = [
  { score: 90, date: new Date(2024, 5, 20), quizId: 1 },
  { score: 70, date: new Date(2024, 4, 27), quizId: 2 },
  { score: 80, date: new Date(2024, 5, 14), quizId: 3 },
];

// Adds the score seeds to the score table of the database
async function seedScore() {
  await Score.bulkCreate(scoreSampleData);
}

// Exports
module.exports = seedScore;
