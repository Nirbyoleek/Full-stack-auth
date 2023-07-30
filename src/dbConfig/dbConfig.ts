import mongoose from "mongoose";

export async function connect() {
	try {
		mongoose.connect(process.env.MONGO_URL!);
		const connection = mongoose.connection;

		connection.on("connected", () => {
			console.log("mongoDB connection successfull");
		});

		connection.on("error", (err) => {
			console.log("MongoDb connection error " + err);
			process.exit();
		});
	} catch (error) {
		console.log("Something is wrong!");
		console.log(error);
	}
}
