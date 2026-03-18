import { app } from './app.mjs'
import { Server } from 'socket.io'

const PORT = 7100

app.listen(PORT, () => {
  console.info(`Listen on http://localhost:${PORT}`)
})

let users = 0
const io = new Server(app)
io.on('connection', (socket) => {
  users++
  io.emit('app:count', `${users} utilisateur(s) connecté(s)`)
  // Envoi au client connecté un message de bienvenue
  socket.emit('app:logged', 'Bienvenue')
  // Ecoute le message d'un client et previent tout le monde (envoi le message  à tout le monde) 
  socket.on('app:new-message', (message) => {
    io.emit('app:new-message', message)
  })
  // Ecoute lorsqu'un client quitte pour x raison (fermeture de l'onglet, erreur réseau, etc.)
  socket.on('disconnect', (reason) => {
    console.log('deconnexion', reason)
    users--
    io.emit('app:new-message', 'Un utilisateur nous a quitté ou à rechargé sa page')
  })
})