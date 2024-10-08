import { models, model, Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verifiedEmail: {
    type: Boolean,
  },
  profile_image: {
    type: String,
  },
  phone: {
    type: Number,
    required: false,
  },
  role: {
    type: String,
    default: "USER",
  },
  last_login: Date,
  status: {
    type: String,
    enum: ["ONLINE", "OFFLINE", "DELETE_ACCOUNT"],
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  lastAttemptFailed: {
    type: Date,
  },
  lastAttemptFailedNumber: {
    type: Number,
  },
});

const User = models.User || model("User", userSchema);

export default User;
