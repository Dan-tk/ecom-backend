import mongoose, { Document, Schema } from 'mongoose';

// Define an interface for the User document
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

// Define the user schema
const userSchema: Schema<IUser> = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

// Create a Mongoose model using the schema and interface
const User = mongoose.model<IUser>('User', userSchema);

export default User;
