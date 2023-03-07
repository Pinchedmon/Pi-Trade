const Router = require('express')
const router = new Router()
const controller = require('./Controllers/authController')
const authMiddleware = require('../Middlewares/authMiddleware')


router.post('/registration', controller.registration);
router.post('/login', authMiddleware, controller.login);
router.get('/logout', controller.logout);
module.exports = router;
