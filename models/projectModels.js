const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
		required: true,
	},
	thumbnail_link: {
		type: String,
		required: false,
	},
	client_info: {
		type: String,
		required: true,
	},
	link_to_project: {
		type: String,
		required: true,
	},
	isActive: {
		type: Boolean,
		required: true,
	},
	used_technologies: {
		type: Array,
		required: false,
	},
});

const ProjectModules = mongoose.model("projects", ProjectSchema);

// async function testDataBase() {
// 	const newProject = await ProjectModules.create({
// 		name: "test",
// 		description: "testing",
// 		thumbnail_link: "test thumb link",
// 		client_info: "Pet Project",
// 		link_to_project: "portfloda ",
// 		isActive: true,
// 	});
// 	console.log(newProject);
// }

// testDataBase();
module.exports = ProjectModules;
