const   express     = require('express'),
        router      = express.Router()
        controller  = require('./controller')

router.post('/register', (req, res) => {
    controller.register(req.body, res)
})

router.post('/login', (req, res) => {
    controller.login(req.body, res)
})

module.exports = router      