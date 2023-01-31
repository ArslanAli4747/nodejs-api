const {getTasks,postTask,getSingletTask,updateTask,deleteTask} = require("../controller/controller")
const express = require("express")
const routers = express.Router()


routers.route("/").get(getTasks).post(postTask)
routers.route("/:id").get(getSingletTask).patch(updateTask).delete(deleteTask)


module.exports = {routers}