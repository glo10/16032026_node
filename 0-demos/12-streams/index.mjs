/**
 * Stream : au lieu de tout envoyer d'un coup
 *  on envoit les infos par petit paquet (ou par lot)
 * stream pour les fichiers volumineux
 * Pour la demo :
 * - on va récupérer un fichier JSON de 50Mo par petit paquet depuis une API Externe et le stocker en local
 * - Pour cela on aura besoin de créer un client HTTP
 */

import { get } from 'node:https'
import {  createWriteStream } from 'node:fs'

get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/refs/heads/master/json/countries%2Bstates%2Bcities.json', (res) => {
  /**
   * res est un flux de lecture (réponse du serveur)
   * localFileStream est un flux d'écriture
   * On peut associer les 2 streams par la méthode pipe()
   */
  const localFileStream = createWriteStream('data.json')
  res.pipe(localFileStream)
  res.on('data', (chunk) => {
    console.log('le serveur a envoyé ce paquet', chunk.toString())
  })
  localFileStream.on('finish', () => {
    console.log("data.json crée")
  })
  localFileStream.on('error', (err) => {
    console.log('[ERROR:localFileStream]', err)
  })
})