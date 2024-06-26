// Imports
const Score = require("../models/Score");

// Score seeds
const scoreSampleData = [
  { score: 90, date: "20/06/2024", quizId: 1 },
  { score: 70, date: "18/06/2024", quizId: 2 },
  { score: 80, date: "14/06/2024", quizId: 3 },
];

// Adds the score seeds to the score table of the database
async function seedScore() {
  await Score.bulkCreate(scoreSampleData);
}

// Exports
module.exports = seedScore;
