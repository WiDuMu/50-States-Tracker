let express = require('express')
let states = require('../models').States

let router = express.Router()

router.get('/states', function(req, res, next) {
    states.findAll({ order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch( err => next(err) )
})

module.exports = router