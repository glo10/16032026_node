const express = require('express')
const router = express.Router()

const { checkID, findOne, findAll } = require('../controllers/news')
router.param('id', checkID)
router.get('/:id', findOne)
router.get('/', findAll)

module.exports = router