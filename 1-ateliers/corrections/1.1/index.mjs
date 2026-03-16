import { stdin as input, stdout as output } from 'process'
import { createInterface } from 'readline/promises'

/**
 * idem que 
 * const app = createInterface({ input: process.stdin, output: process.stdout })
 *  ou idem que 
 * const app = createInterface(process,process.stdout)
 */ 
const app = createInterface({ input, output })
/**
 * await rend la promesse séquentielle (on va attendre d'avoir le résultat avant d'exec la suite)
 * autrement dit on fait de l'asynchrone tout en ayant une exécution séquentielle (ligne par linge tels que vous avez rédigé votre code)
 */ 
const lastName = await app.question('Quel est votre nom ? ') 
const firstName = await app.question('Quel est votre prénom ? ')
console.log(`Bonjour ${lastName} ${firstName} !`)
app.close()