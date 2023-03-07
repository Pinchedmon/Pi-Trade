const Router = require('express')
const router = new Router()
const controller = require('./Controllers/p2pController')

router.post('/make', controller.make);
router.post('/join', controller.join);
router.post('/leave', controller.leave);
router.post('/accept', controller.accept);
module.exports = router;
