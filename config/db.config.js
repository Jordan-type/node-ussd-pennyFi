import mongoose from "mongoose";
import chalk from "chalk";

const MONGODB_OPTIONS = {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    const connectionResult = await mongoose.connect(process.env.DEV_MONGO_URI, MONGODB_OPTIONS);
    console.log(
      `${chalk.green("✓")} ${chalk.blue("Connected to MongoDB:")} ${chalk.green(
        `${connectionResult.connections[0].name}`
      )} , ${chalk.blue("at Host:")} ${chalk.green(
        `${connectionResult.connection.host}`
      )} `
    );
  } catch (error) {
    console.error(`${chalk.red("X")} ${chalk.blue("Error connecting to database:")} ${chalk.red(`${error.message}`)}`);
    process.exit(1);
  }
};

connectDB();
