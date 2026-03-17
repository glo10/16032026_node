# Serveur Web

***Règle : 1 requête = 1 route***

## fonctionnement

1. requête -> verifier le chemin et la méthode
2. Charger la page dédié pour la retourner en réponse
- Besoin des modules ***node:fs (méthode readFile()) pour lire les fichiers*** et l'objet ***Response et ses méthodes (writeHead(), write() et end())***

cf. Demo [7-web-server](../7-web-server/index.mjs)