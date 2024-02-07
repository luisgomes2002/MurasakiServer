"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./database/database"));
const index_1 = __importDefault(require("./routes/index"));
const User_1 = __importDefault(require("./models/User"));
__exportStar(require("colors"), exports);
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, database_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(index_1.default);
app.get("/", async (req, res) => {
    const users = await User_1.default.find();
    return res.json(users);
});
exports.default = app;
//# sourceMappingURL=app.js.map