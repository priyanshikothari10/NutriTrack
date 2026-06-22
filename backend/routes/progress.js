const express = require('express')
const { listWeights, addWeight } = require('../controllers/progressController')
const auth = require('../middleware/auth')
const router = express.Router()

router.use(auth)
router.get('/weights', listWeights)
router.post('/weights', addWeight)

module.exports = router
