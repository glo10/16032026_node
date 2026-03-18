# Les commandes MongoDB via le shell Mongosh

Dans les commandes suivantes la base données en exemple est nommée champions_league et la collection en exemple nommée teams et persons.
Vous pouvez créer autant de base de données et de collections selon vos besoins.

## CRUD

```bash
# connexion
mongosh -u admin -p
# Voir toutes les bases de données
show dbs
# utiliser ou créer une base de données 
use champions_league
# Voir la base de données actuelle
db
# Supprimez la base de données actuelle
db.dropDatabase()
# Créez une collection
db.createCollection("teams")
# Obtenir une collection
db.getCollection('teams')
# Voir toutes les collections
show collections
# Insérer un document
db.teams.insertOne({ name: 'paris', country: 'france'})
# Insérer plusieurs documents
db.teams.insertMany([
  { name: "marseille", country: "france" },
  { nom: "lyon", country: "france" }
])
# Obtenir des données d'une collection
db.teams.find({})
# Obtenir des données d'une collection avec des filtres
db.teams.find({ country: "france"})
# obtenir une seule collection
db.teams.findOne({ name: "paris" })
# Modifier plusieurs collections
db.persons.updateMany(
  { age: { $gt: 50 } },
  { $set: { statut: "senior" } }
)
# Supprimer un document
db.persons.deleteOne({ name: "John" })
# Supprimer tous les documents
db.persons.deleteMany({})
```

## Opérateurs fréquents

```bash
{ age: { $gt: 20 } }   // >
{ age: { $lt: 30 } }   // <
{ age: { $gte: 25 } }  // >=
{ age: { $lte: 40 } }  // <=
```

## Opérateurs logiques

```bash
{ $and: [ { age: { $gt: 20 } }, { age: { $lt: 30 } } ] }
{ $or: [ { name: "Maria" }, { name: "Marie" } ] }
```