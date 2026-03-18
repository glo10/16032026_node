import { Schema, model } from 'mongoose'

export default model("Product", Schema({
  reference: { type: String, required: true },
  descrption: { type: String, required: true },
  createdAt: { type : Date},
  rank: { type: Number }
}))