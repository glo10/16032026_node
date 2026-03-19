import { mongoose } from "mongoose";
import UserModel from "../models/user-schema.mjs";

export async function mgdConnect(url) {
  await mongoose
    .connect(url)
    .then(() => {
      console.log('DB OK')
      return mongoose.connection.readyState
    })
    .catch((err) => {
      console.error("DB KO", err);
      process.exit(1);
    });
}

export async function findByEmail(email) {
  return await UserModel.findOne({ email });
}
