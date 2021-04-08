const router = require("express").Router();
const { Jobs, User } = require("../../models");

// /api/jobs
//get all jobs

// Return all jobs as a json object
router.get('/', async (req, res) => {
  try {
    const jobsData = await Jobs.findAll();
    // const jobs = jobsData.map((job) => job.get({ plain: true }));
    // res.render("jobs", { jobs });
    res.status(200).json(jobsData);
    
  } catch (err) {
    if (err) throw err;
    res.status(500).json(err);
  }
});

// Return single job as json object based on
// job id
router.get('/:id', async (req, res) => {
  try {
    const jobsData = await Jobs.findByPk(req.params.id);

    res.status(200).json(jobsData);

  }catch (err) {
    if (err) throw err;
    res.status(500).json(err);
  }
});

module.exports = router;