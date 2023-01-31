const jobSchema = require("../model/jobSchema")
const getAllJobs = async(req,res)=>{
  const createdBy = req.user.userID
  const jobs = await jobSchema.find({createdBy}).sort('createdBy')
    
    res.status(200).json({jobs})
}

const creatJob = async(req,res)=>{
    const {userID} = req.user
    req.body.createdBy = userID
    const job =await jobSchema.create({...req.body})
    res.status(200).json({job})
}

const getAJob = async(req,res)=>{
    const userid = req.user.userID
    const jobid = req.params.id
    const job = await jobSchema.findOne({
        _id:jobid,
        createdBy:userid
    })
    
    res.status(200).json({jobs:job})
}

const updateAjob = async(req,res)=>{
    
    const jobID = req.params.id
    const userId = req.user.userID
    const job  = await jobSchema.findByIdAndUpdate({_id:jobID,createdBy:userId},{...req.body},{new:true,runValidators:true})

    
    res.status(200).json({job})
}
const deleteAjob = async(req,res)=>{
    const jobID = req.params.id
    const userId = req.user.userID
    const job  = await jobSchema.findByIdAndDelete({_id:jobID,createdBy:userId})
    res.status(200).json({job})
}


module.exports = {
 getAllJobs,
 getAJob,
 creatJob,
 updateAjob,
 deleteAjob
}