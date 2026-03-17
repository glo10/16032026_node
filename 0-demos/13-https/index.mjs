import { createServer } from 'node:https'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve, dirname, join } from 'node:path'

const PORT = 1243
const rootPath = resolve(dirname(fileURLToPath(import.meta.url)))
const options = {
  key: readFileSync(join(rootPath, 'ssl', 'private.pem')),
  cert: readFileSync(join(rootPath, 'ssl', 'certificate.crt'))
}
createServer(options, (_, res) => {
  res.end('Hello World')
}).listen(PORT, () => {
  console.log(`https://localhost:${PORT}`)
})