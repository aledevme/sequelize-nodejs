var express = require('express')
var router =  express.Router();
const controller = require('../controllers/autores')

router.get('/', controller.All)
router.post('/guardar/',controller.createUser)
router.get('/:id',controller.findAuthor)
router.put('/:id/edit',controller.updateAutor)
router.delete('/:id',controller.deleteActor)

module.exports = router;