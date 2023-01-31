const {getAJob,getAllJobs,creatJob,deleteAjob,updateAjob}  = require("../controllers/jobController")
const express = require("express")
const router = express.Router()


router.route("/").get(getAllJobs).post(creatJob)
router.route("/:id").patch(updateAjob).get(getAJob).delete(deleteAjob)


module.exports = router