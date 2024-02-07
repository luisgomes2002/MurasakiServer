import mongoose, { Document, Model, Schema } from "mongoose";

interface ILikes {
  userId: string;
  created: Date;
}

interface IComments {
  idComment: string;
  userId: string;
  message: string;
  sdasdasd: string;
  userIdName: string;
  Testcoment: string;
  userIdUsername: string;
  testcoment877: string;
  userIdAvatar: string;
  createdAt: Date;
}

interface ITags {
  tagName: string;
}

interface ILinks {
  link: string;
}

interface IPostDocument extends Document {
  name: string;
  banner: string;
  title: string;
  text: string;
  likes: ILikes[];
  comments: IComments[];
  tags: ITags[];
  links: ILinks[];
  createAt: Date;
}

const PostSchema = new Schema<IPostDocument>({
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

const PostModel: Model<IPostDocument> = mongoose.model<IPostDocument>(
  "Post",
  PostSchema,
);

export default PostModel;
