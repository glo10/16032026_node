import { mongoose } from 'mongoose'
import UserModel from './models/user-schema.mjs'
process.loadEnvFile()
/**
 * Attention toutes les opérations retournent des promesses à traiter avec .then() et .catch() ou await
 */
await mongoose.connect(process.env.DB_LOCAL)
.then(() => mongoose.connection.readyState)
.catch(err => {
  console.error('DB KO', err)*
  // Attention arret complète de l'application pour tout le monde
  process.exit(1)
})

const solo = new UserModel({ firstname: 'Glodie', lastname: 'Tshimini', email: '@'})
solo.save()
.then(data => console.log('save', data))
.catch(error => console.error('save', error))

UserModel.insertMany([
  { firstname: 'Glodie', lastname: 'Tshimini', email: 'a@'},
  { firstname: 'Glodie', lastname: 'Tshimini', email: 'b@'},
  { firstname: 'Glodie', lastname: 'Tshimini', email: 'c@'},
])
.then(data => console.log('insertMany', data))
.catch(error => console.error('insertMany', error))

UserModel.find()
.then(data => console.log('find', data))
.catch(error => console.error('find', error))