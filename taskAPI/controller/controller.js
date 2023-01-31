//import files

const Task = require("../model/model")
const asyncWraper = require("../middleware/async.Wraper")
const {errorHandlerFn} = require("../middleware/errorHandlerCls")
//get all storde data
const getTasks = asyncWraper( async(req,res)=>{
        data  = await Task.find()
        res.status(200).json({task:data})
}
)


//post data to database
const postTask =asyncWraper( async(req,res)=>{
        const task =await Task.create(req.body)
        console.log(task);
        res.status(201).json({task})
   }
)

//update data
const updateTask =asyncWraper( async (req,res)=>{
      const  data = req.body
      const  id = req.params.id
      console.log(data);
       const task = await Task.findOneAndUpdate({_id:id},data,{
            runValidators:true,
            new:true,
            overwrite:true
        })
        if (!task){
            return next(errorHandlerFn("could`t update the task",404))
       
        }
        res.status(200).json({task})

}
)

//get single data
const getSingletTask =asyncWraper( async (req,res,next)=>{
       const task =await Task.findOne({_id:req.params.id})
       console.log(task);
       if (!task){
        return next(errorHandlerFn("could`t find the task",404))
       } 
       res.status(200).json({task})
}
)

//delete data
const deleteTask =asyncWraper( async (req,res)=>{
        const task =await Task.findByIdAndDelete(req.params.id)
        res.status(200).json(task)
    
}
)


//export to use for other tasks
module.exports = {
    getTasks,
    postTask,
    updateTask,
    getSingletTask,
    deleteTask
    }
