# Correction atelier 5.1 : API REST

## Lancement du projet

Projet express avec l'utilisation du module *express* et le standard *ECMAScript*.
Express a été installé avec `npm i express` et pas la CLI

Copiez/collez le fichier [.env.example](./.env.example) et renommez-le en ***.env***

```bash
npm run dev
```

## Lancement des tests d'intégration avec supertest

```bash
npm run test
```

Ici pas besoin de lancer le serveur en parallèle, étant donné qu'on exporte ***app.mjs***, on peut l'utiliser autant de fois qu'on le souhaite notamment ici pour l'environnement de test.