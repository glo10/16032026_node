# Correction atelier 5.4 : authentification

PS: ici tous les fichiers js ont l'extension .cjs à la place du classique .js
1. Générez un ***SECRET***, depuis un terminal, vous pouvez exécuter la commande ci-dessous
```js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
2. Copiez/collez *.env.example* et renommez le en *.env*
3. Affectez la valeur affiché dans la commande précédente dans `SECRET=`
4.`npm start`