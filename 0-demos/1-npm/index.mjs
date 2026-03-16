/**
 * 
 * Contrat demander le nom du projet et la description
 * via le terminal
 * 
 */

/**
 * 4 façons d'utiliser une fonction ou un objet depuis Node
 * 1. De manière asynchrone avec des callbacks functions (la majorité des cas)
 * 2. asynchrone avec des promesses (on utilise le prefix /promises)
 *  - .then() => succès
 *  - .catch() => cas d'erreur
 *  - .finally() => s'exécute dans tous les cas (succès ou échec)
 * 3. Des fonctions Synchrones (suffixe Sync sur la fonction)
 *  - Attention toutes les fonctions n'ont pas de version synchrone
 *  - pour les cas de  lecture ou écriture synchrone 
 * 4. async/await
*/

import { createInterface } from 'node:readline/promises'

console.log('Début')
const app = createInterface(process.stdin, process.stdout)
app.question("Nom du projet ?")
.then(res => { throw new Error(`Erreur volontaire avec le nom ${res}`) })
.catch(error => console.error('[catch:question]',  error))
.finally(() => {
  app.close()
})
console.log('Fin')

