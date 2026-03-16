import { loadEnvFile } from 'process'
loadEnvFile()
console.log('Prénom', process.argv[4], 'premier script', process.argv[2])
/**
 * Recup variables environnements depuis .env
 * Il faut placer un fichier nommé .env à la racine du projet
 */
console.log('Prénom', process.env.FIRSTNAME)