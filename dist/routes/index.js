"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = __importDefault(require("./user.route"));
const router = (0, express_1.Router)();
router.use("/user", user_route_1.default);
// router.use("/posts", postRouter);
// router.use("/auth", authRouter);
// router.use("/doc", swaggerRouter);
exports.default = router;
//# sourceMappingURL=index.js.map