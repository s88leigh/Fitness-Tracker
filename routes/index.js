const router = require('express').Router()
const apiRoutes = require('./api-routes')
const htmlRoutes = require('./html-routes')

// router.get('/api/workouts)
router.use('/api', apiRoutes)
router.use(htmlRoutes)

module.exports = router