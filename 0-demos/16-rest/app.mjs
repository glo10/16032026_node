/**
 * API REST
 *  côté client
 * 1. une méthode HTTP (get, post, put, delete)
 * 2. une route à intérroger
 * 
 * côté serveur
 * 1. un roteur qui traite la requête et retourne une ressource généralement du JSON
 * 
 */
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"
import { readFile } from "node:fs/promises"
import express from 'express'

const PORT = 8160
const getContent = async (filename, charset='utf-8') => {
  return readFile(filename, charset)
  .then((data) => {
    return  JSON.parse(data)
  })
  .catch(error => error)
}

const filename = join(dirname(fileURLToPath(import.meta.url)), 'public', "users.json")
const app = express()

app.get('/', (req, res) => {
  const routes = [
    {
      name: "GET /users",
      description: "All users",
      path: `http://localhost:${PORT}/users`
    },
    {
      name: "POST /users",
      description: "Create new user",
      path: `http://localhost:${PORT}/users`
    },
    {
      name: "UPDATE /users/:id",
      description: "Update one user from ID",
      path: `http://localhost:${PORT}/users`,
      body: {
        name: "string",
        email: "string"
      }
    }
  ]
  res.json(routes)
})
// CRUD : CREATE -> POST, READ -> GET, UPDATE -> PUT, DELETE -> DELETE
app.get('/users', (req, res) => {
  getContent(filename)
  .then((data) => res.json(data))
})

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  getContent(filename)
  .then((users) => {
    const user = users.find(u => u.id === id )
    if(user) res.json(user)
    else res.json({ success: false, message: 'User not found'})
  })
})

// Créer un utiliser et le stocker dans le fichier users.json
app.post('/users', (req, res) => {
  console.log('req', req)
  let body = ''
  req.on("data", (chunk) => {
    body+= chunk.toString()
  })
  req.on('end', () => {
    console.log('body before', body, typeof body)
    body = JSON.parse(body)
    console.log('body after', body, typeof body)
    // TODO traitement pour ajouter l'utilisateur dans le fichier public/users.json
    res.send('OK')
  })
})

app.delete('/users/:id', (req, res) => {

})

app.put('/users/:id', (req, res) => {
  
} )

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})