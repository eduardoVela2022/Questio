// Imports
const User = require("../models/User");

// User seeds
const userSampleData = [
  {
    username: "John Smith",
    email: "john_smith@email.com",
    password: "password123",
  },
  {
    username: "Olivia Sullivan",
    email: "olivia_sullivan@email.com",
    password: "password123",
  },
  {
    username: "Henry Walsh",
    email: "henry_walsh@email.com",
    password: "password123",
  },
];

// Adds the user seeds to the user table of the database
async function seedUser() {
  await User.bulkCreate(userSampleData);
}

// Exports
module.exports = seedUser;
