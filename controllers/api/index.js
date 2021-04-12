const router = require('express').Router();
const jobsRoutes = require('./jobs-routes');
const userRoutes = require('./user-routes.js');
const passport = require("../config/passport");
router.use('/jobs', jobsRoutes);
router.use('/users', userRoutes);


module.exports = router;