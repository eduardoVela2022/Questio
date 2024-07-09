const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User, Quiz } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login user by finding email
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.error("Login error:", err); // Log the error for debugging
    res
      .status(500)
      .json({
        message: "An error occurred while logging in. Please try again later.",
      });
  }
});

router.put("/", withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id;

    const { username, email, password } = req.body;

    // Check if at least one field is provided for update
    if (!username && !email && !password) {
      return res.status(400).json({ message: "Please provide data to update" });
    }

    // Fetch the current user data
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Prepare an object with the fields to update
    const updatedData = {};
    if (username) updatedData.username = username;
    if (email) updatedData.email = email;

    // Handle password separately (hashing)
    if (password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      updatedData.password = hashedPassword;
    }

    // Update user in the database
    await user.update(updatedData);

    // Respond with the updated user data
    res.status(200).json({
      message: "User updated successfully",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: err.message });
  }
});

router.delete("/", withAuth, async (req, res) => {
  const transaction = await User.sequelize.transaction(); // Start transaction

  try {
    const userId = req.session.user_id;

    // Fetch the user to ensure they exist
    const user = await User.findByPk(userId, { transaction });

    if (!user) {
      await transaction.rollback();
      return res.status(404).json({ message: "User not found" });
    }

    // Delete quizzes related to the user
    await Quiz.destroy({
      where: { userId: userId },
      transaction, // Use the same transaction
    });

    // Delete the user
    await User.destroy({
      where: { id: userId },
      transaction, // Use the same transaction
    });

    // Commit the transaction
    await transaction.commit();

    // Destroy the session and log the user out
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return res
          .status(500)
          .json({ message: "Error logging out after account deletion" });
      }

      res.clearCookie("connect.sid"); // Clear session cookie
      res
        .status(200)
        .json({ message: "User and related data deleted successfully" });
    });
  } catch (err) {
    // Rollback the transaction in case of error
    await transaction.rollback();

    console.error("Error deleting user:", err);
    res.status(500).json({ message: err.message });
  }
});

// Logout user
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
