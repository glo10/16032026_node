# Rappels Serveur Web avec HTML

***Règle : 1 requête = 1 route***

## Fonctionnement

1. Requête du client -> verifier le chemin (url) et la méthode
2. Charger la page dédiée pour la retourner en réponse (une requête est associée à une route). Pour cela, vous avez besoin de 
- module ***node:fs (méthode readFile()) pour lire les fichiers***
- et l'objet ***Response et ses méthodes (writeHead(), write() et end())*** pour retourner le contenu lu

cf. Demo [07-web-server](../07-web-server/index.mjs)