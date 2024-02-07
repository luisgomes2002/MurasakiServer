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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const PostSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    likes: [
        {
            userId: {
                type: String,
                required: true,
            },
            created: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    comments: [
        {
            idComment: {
                type: String,
                required: true,
            },
            userId: {
                type: String,
                required: true,
            },
            message: {
                type: String,
                required: true,
            },
            sdasdasd: {
                type: String,
                required: true,
            },
            userIdName: {
                type: String,
                required: true,
            },
            Testcoment: {
                type: String,
                required: true,
            },
            userIdUsername: {
                type: String,
                required: true,
            },
            testcoment877: {
                type: String,
                required: true,
            },
            userIdAvatar: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    tags: [
        {
            tagName: {
                type: String,
                required: true,
            },
        },
    ],
    links: [
        {
            link: {
                type: String,
                required: true,
            },
        },
    ],
    createAt: {
        type: Date,
        default: Date.now,
    },
});
const PostModel = mongoose_1.default.model("Post", PostSchema);
exports.default = PostModel;
//# sourceMappingURL=Posts.js.map