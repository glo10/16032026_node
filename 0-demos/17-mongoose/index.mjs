import { mongoose } from 'mongoose'

process.loadEnvFile()
mongoose.connect(process.env.DB_LOCAL)
.then(() => {
  if(mongoose.connection.readyState === 1) {
    console.log('DB OK')
  }
})
.catch(error => console.error('DB KO', error))
/**
 * Les states (état de la connexion à la bdd MongoDB)
    '0': 'disconnected',
    '1': 'connected',
    '2': 'connecting',
    '3': 'disconnecting',
    '99': 'uninitialized',
 */