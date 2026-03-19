# Lancement

## Front

Lancez le fichier index.html avec l'extension Live Server de VS Code

## Back

1. Démarrez votre base de données MongoDB (Docker ou Cloud)
2. Copiez/collez *.env.example* et le renommer en *.env*
3. Changez les informations d'accès à la base de données
4. Insérez au moins un utilisateur pour tester, le schéma de votre entité *User* doit avoir au moins les champs email et password.
5. `npm install`
6. `npm start`
7. Depuis le front, saisissez l'email et mot de passe puis cliquez sur envoyer pour voir le retour du serveur
8. Cliquez sur le bouton vérifiez le token
- Avant 2min après sa création, il est toujours valide
- Après 2min, il n'est plus valide
