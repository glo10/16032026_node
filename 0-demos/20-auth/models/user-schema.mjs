import { Schema, model } from 'mongoose'

const userSchema = Schema({
  // Description de votre entité = structure des futures documents
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true,  unique: true },
  password: { type: String, required: true }
})
/**
 * @param string nom du model unique et avec la première lettre en MAJ
 */
export default model("User", userSchema)