// Imports
const sequelize = require("../config/connection");
const seedAnswer = require("./answerSeeds");
const seedQuestion = require("./questionSeeds");
const seedQuiz = require("./quizSeeds");
const seedScore = require("./scoreSeeds");
const seedUser = require("./userSeeds");

// Creates all the seeds of all the models of the database
async function seedAll() {
  // Database connection
  await sequelize.sync({ force: true });
  console.log("\n --- Database connection established --- \n");

  // User seeds
  await seedUser();
  console.log("\n --- User seeds created --- \n");

  // Quiz seeds
  await seedQuiz();
  console.log("\n --- Quiz seeds created --- \n");

  // Question seeds
  await seedQuestion();
  console.log("\n --- Question seeds created --- \n");

  // Answer seeds
  await seedAnswer();
  console.log("\n --- Answer seeds created --- \n");

  // Score seeds
  await seedScore();
  console.log("\n --- Score seeds created ---\n");

  // End process
  process.exit(0);
}

// Execute
seedAll();
