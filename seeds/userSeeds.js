// Imports
const User = require("../models/User");
const bcrypt = require("bcrypt");

// User seeds
let userSampleData = [
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
  await User.create(userSampleData[0]);
  await User.create(userSampleData[1]);
  await User.create(userSampleData[2]);
}

// Exports
module.exports = seedUser;
