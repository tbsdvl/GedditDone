const router = require('express').Router();
const { Jobs, User } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
  try {
    // Get all jobs and JOIN with user data
    const jobsData = await Jobs.findAll({
      include: [
        {
          model: User,
          attributes: ['firstname', 'lastname', 'email'],
        },
      ],
    });

    // Serialize data so the template can read it
    const jobs = jobsData.map((job) => job.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      jobs, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/job/:id',withAuth, async (req, res) => {
  try {
    const jobsData = await job.findByPk(req.params.id, {
        attributes: ['jobtitle', 'salary', 'description', 'city', 'state'],
      include: [
        {
          model: User,
          attributes: ['firstname', 'lastname', 'email'],
        },
      ],
    });

    const job = jobsData.get({ plain: true });

    res.render('job', {
      ...job,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Jobs }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
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
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
