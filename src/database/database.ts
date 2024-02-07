import mongoose from "mongoose";

const connectDatabase = (): void => {
  console.log("----------------------------------------------");
  console.log("🔃 Wait connecting to the database".blue);

  const connectionString = process.env.DB_CONNECTION_STRING;
  if (!connectionString) {
    console.log("❌ DB_CONNECTION_STRING não está definido".red);
    console.log("----------------------------------------------");
    return;
  }

  mongoose
    .connect(connectionString)
    .then(() => console.log("✅ MongoDB Atlas Connected".green))
    .catch((error) => console.log(`❌ Ocorreu um erro: ${error}`.red))
    .then(() => console.log("----------------------------------------------"));
};

export default connectDatabase;
