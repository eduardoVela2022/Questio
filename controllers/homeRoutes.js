const router = require('express').Router();
const { Quiz, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/quiz/:id', withAuth, async (req, res) => {
  try {
    const quizData = await Quiz.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const quiz = quizData.get({ plain: true });

    // Render quiz handlebar
    res.render('quiz', {
      ...quiz,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/quizzes', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Quiz }],
    });

    const user = userData.get({ plain: true });

    // Render quizzes handlebar
    res.render('quizzes', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/quizzes');
    return;
  }
  
  // Render login handlebar
  res.render('login');
});

module.exports = router;