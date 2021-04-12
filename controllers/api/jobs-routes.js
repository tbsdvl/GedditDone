const router = require("express").Router();
const { Jobs, User } = require("../../models");
const withAuth = require('../../utils/auth');
// /api/jobs
//get all jobs

//to render all posts by users on /api/jobs when clicking on find a job
router.get('/', withAuth, async (req, res) => {
    try {
        const dbJobsData = await Jobs.findAll({

            include: [
                {
                    model: User,
                    attributes: ['firstname', 'lastname', 'email'],
                },
            ],
        });

        const jobs = dbJobsData.map((job) =>
            job.get({ plain: true })
        );

        res.render('jobslist', {
            jobs,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
router.post('/', withAuth, async (req, res) => {
    try {
        const newJob = await Jobs.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newJob);
    } catch (err) {
        res.status(400).json(err);
    }
});

//to render by job/:id on jobs.handlebars
router.get('/:id', withAuth, async (req, res) => {
    try {
        const jobsData = await Jobs.findOne({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
            attributes: ['jobtitle', 'salary', 'description', 'city', 'state', 'company'],
            include: [
                {
                    model: User,
                    attributes: ['firstname', 'lastname', 'email'],
                },
            ],
        });
        const job = jobsData.get({ plain: true });

        res.render('jobs', {
            ...job,
            logged_in: req.session.logged_in
        });

        if (!jobsData) {
            res.status(404).json({ message: 'No job found with this id!' });
            return;
        }

        // res.status(200).json(jobsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const jobData = await Jobs.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!jobData) {
            res.status(404).json({ message: 'No job found with this id!' });
            return;
        }

        res.status(200).json(jobData);
    } catch (err) {
        res.status(500).json(err);
    }
});






module.exports = router;