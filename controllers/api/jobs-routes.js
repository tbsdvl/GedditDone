const router = require("express").Router();
const { Jobs, User } = require("../../models");

// /api/jobs
//get all jobs

router.get("/", async (req, res) => {
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

module.exports = router;