import { createServer } from 'node:http'

/**
 * Depuis le lancement du script dans les arguments
 * s'il y a le port en argument au rand 2 on prend sa valeur
 * sinon on prend par defaut 7000
 */
let port = process.env.PORT || process.argv[2]
if(!/\d{4}/.test(port)) {
  port = 7000
}
createServer((req, res) => {
  if(req.url === '/' && req.method.toUpperCase() === 'GET') {
    // Ecrire dans les headers
    res.writeHead(200)
    // Ecrire dans le body
    res.write('<h1>Bienvenue</h1>')
    res.write('<p>A toi jeune Dev Node</p>')
    // Fermer le flux d'écriture et retourner une réponse
    res.end()
    // Alternative condensée aux lignes 18, 19 et 21  res.end('Bienvenue a toi jeune Dev Node')
  } else {
    res.end('404 not found')
  }
}).listen(port, () => {
  console.info(`Running at http://localhost:${port}`)
})