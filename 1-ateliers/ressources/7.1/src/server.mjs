import { app } from './app.mjs'
import { Server } from 'socket.io'

const PORT = 7100

app.listen(PORT, () => {
  console.info(`Listen on http://localhost:${PORT}`)
})
// TODO here