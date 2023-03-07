const Router = require('express')
const router = new Router()
const controller = require('./Controllers/coinController')


router.post('/sell', controller.sell);
router.post('/buy', controller.buy);
router.put('/convert', controller.convert);
module.exports = router;
