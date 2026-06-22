const express = require('express')
const router = express.Router()

router.use('/auth', require('./auth'))
router.use('/food', require('./food'))
router.use('/progress', require('./progress'))
router.use('/profile', require('./profile'))

module.exports = router
