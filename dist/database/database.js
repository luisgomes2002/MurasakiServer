"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDatabase = () => {
    console.log("----------------------------------------------");
    console.log("🔃 Wait connecting to the database".blue);
    const connectionString = process.env.DB_CONNECTION_STRING;
    if (!connectionString) {
        console.log("❌ DB_CONNECTION_STRING não está definido".red);
        console.log("----------------------------------------------");
        return;
    }
    mongoose_1.default
        .connect(connectionString)
        .then(() => console.log("✅ MongoDB Atlas Connected".green))
        .catch((error) => console.log(`❌ Ocorreu um erro: ${error}`.red))
        .then(() => console.log("----------------------------------------------"));
};
exports.default = connectDatabase;
//# sourceMappingURL=database.js.map