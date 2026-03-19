import { Schema, model } from 'mongoose'

const userSchema = Schema({
  email: { type: String, required: true,  unique: true },
  password: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String }
})
export default model("User", userSchema)