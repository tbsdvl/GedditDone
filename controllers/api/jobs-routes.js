const router = require ('express').Router();
const {Jobs, User} =require('../../models');

// /api/jobs
//get all jobs

router.get('/', async (req,res)=> {
    try{
        const jobsData= await Jobs.findAll({
            include: [{ model: User}]
        })
        const jobs= jobsData.map((job)=>
        job.get({plain: true}));
        res.render('jobs', {jobs})
    } catch (err){
        console/log(err);
        res.status(500).json(err);
    }
});


module.exports = router;