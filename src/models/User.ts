import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcrypt";

interface IFollow {
  userId: string;
  userIdName: string;
  created: Date;
}

interface IFollowed {
  id: string;
  idName: string;
  createdAt: Date;
}

interface INotification {
  id: string;
  title: string;
  createdAt: Date;
}

interface IUserDocument extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  background: string;
  fullPermission: boolean;
  points: number;
  follows: IFollow[];
  followed: IFollowed[];
  createdAt: Date;
  notification: INotification[];
}

const UserSchema = new Schema<IUserDocument>({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
  fullPermission: {
    type: Boolean,
    default: false,
  },
  points: {
    type: Number,
    default: 0,
  },
  follows: [
    {
      userId: {
        type: String,
        required: true,
      },
      userIdName: {
        type: String,
        required: true,
      },
      created: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  followed: [
    {
      id: {
        type: String,
        required: true,
      },
      idName: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  notification: [
    {
      id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

UserSchema.pre<IUserDocument>("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return console.error(error);
  }
});

const UserModel: Model<IUserDocument> = mongoose.model<IUserDocument>(
  "User",
  UserSchema,
);

export default UserModel;
