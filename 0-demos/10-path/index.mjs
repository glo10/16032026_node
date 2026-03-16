import { readFile } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
// Spécifique à ECMASCRIPT
import { fileURLToPath } from 'node:url'

/**
 * Méthodologie pour avoir le chemin absolu du process en cours
 * 1. Utilisez la fonction fileURLTOPath(import.meta.url)
 * 2. Utilisez resolve() et dirname() pour contruire le chemin absolu
 * 3. Pour construire des chemins relatifs à partir d'un chemin absolu utiliser la fonction join()
 *  -> join() : concaténation des chemins => ne retourne pas forcément un chemin absolue
 *     exemples : join('a', 'b') => a/b
 *                join('/a', 'b') => /a/b : ici on donne un chemin absolu en tout premier donc la résultante sera en absolu aussi
 *  -> resolve : resolution avec un chemin absolu : retourne toujours un chemin absolu
 *    exemples : resolve ("a", "b") => /a/b
 */
const rootURL = fileURLToPath(import.meta.url)
const rootDirname = resolve(dirname(rootURL))

/**
 * Constructions de mes chémins relatifs
 */
const imagesDir = join(rootDirname, 'public', 'images')
const cssDir = join(rootDirname, 'public', 'assets', 'css')
const htmlDir = join(cssDir, '..', '..', 'html')
const indexHtmlFilename = join(htmlDir, 'index.html')
console.log('css Dir', cssDir)
console.log('html Dir', htmlDir)
console.log('images Dir', imagesDir)
console.log('index.html', indexHtmlFilename)

readFile(indexHtmlFilename, (err, data) => {
  if(!err) console.log('contenu index.html', data.toString())
})