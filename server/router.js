const   express     = require('express'),
        router      = express.Router()
        controller  = require('./controller')

router.post('/register', (req, res) => {
    controller.register(req.body, res)
})

router.post('/login', (req, res) => {
    controller.login(req.body, res)
})

router.get('/announcements', (req, res) => {
    controller.getAnnouncements(res)
})

router.post('/announcements', (req, res) => {
    controller.createAnnouncement(req.body, res)
})

router.post('/course', (req, res) => {
    controller.createCourse(req.body, res)
})

router.patch('/course', (req, res) => {
    controller.updateCourse(req.body, res)
})

router.get('/course', (req, res) => {
    controller.getUserCourses(req.body, res)
})

router.delete('/course', (req, res) => {
    controller.deleteCourse(req.body, res)
})

module.exports = router      