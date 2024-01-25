const express = require('express')
const {createdata} = require('../controllers/dataController')
// const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

// require auth for all data routes
// router.use(requireAuth)

// POST a new data
router.post('/', createdata)

module.exports = router