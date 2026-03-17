var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * middleware qui vérifie le paramètre "checkid" puis passe la main à la prochaine route qui match
 * avec la requête du client
 * match = correspondance entre l'url du client et le pattern de la route définit dans le router
 */
router.get('/:checkid', (req, res, next) => {
  const id = req.params.checkid
  if(/\d+/.test(id)) next()
  else throw new Error('Id doit être un nombre')
})

router.get('/:id', (req, res,__) => {
  const id = req.params.id
  res.send(`ID est ${id}`)
})
// route jamais atteinte car la précédente route match et retourne un résultat
router.get(':i', (req, res) => {
  res.send('jamais atteint')
})

module.exports = router;
