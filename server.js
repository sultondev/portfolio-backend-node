const dotenv = require("dotenv");
dotenv.config({ path: `./config.env` });
const app = require("./app");
const projectModels = require("./models/projectModels");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

main()
	.then((doc) => {
		console.log('successfully connected to database')
	})
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: false,
	});
}

app.listen(PORT, () => {
	console.log(`listening to ${PORT}...`);
});
