const ProjectModules = require("../models/projectModels");

exports.getAllProjects = async (req, res) => {
	try {
		const projects = await ProjectModules.find();
		res.status(200).json({
			status: "success",
			data: projects,
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err,
		});
	}
};

exports.createProject = async (req, res) => {
	try {
		const newProject = await ProjectModules.create(req.body);

		res.status(201).json({
			status: "success",
			data: newProject,
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err,
		});
	}
};

exports.updateProject = async (req, res) => {
	try {
		const updatedProject = await ProjectModules.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
				runValidators: true,
			}
		);
		res.status(202).json({
			status: "success",
			data: updatedProject,
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err,
		});
	}
};

exports.deleteProject = async (req, res) => {
	try {
		const removedProject = await ProjectModules.findByIdAndDelete(
			req.params.id
		);
		res.status(202).json({
			status: "success",
			data: removedProject,
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err,
		});
	}
};

exports.getProject = async (req, res) => {
	try {
		const project = await ProjectModules.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: project,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: err,
		});
	}
};
