const express = require("express");

const router = express.Router();
const projectController = require("../controllers/projectControllers");

router
	.route("/")
	.get(projectController.getAllProjects)
	.post(projectController.createProject);

router
	.route("/:id")
	.patch(projectController.updateProject)
	.delete(projectController.deleteProject)
	.get(projectController.getProject);
// .delete(projectController.deleteProject)

module.exports = router;
