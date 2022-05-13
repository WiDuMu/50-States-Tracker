let express = require('express')
let states = require('../models').States

let router = express.Router()

router.get('/states', function(req, res, next) {
    states.findAll({ order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch( err => next(err) )
})

router.get('/state/:name', function(req, res, name) {
    let stateName = req.params.name
    states.findOne( {where: { name: stateName }})
        .then( state => {
            if (state) {
                return res.json(state)
            } else {
                return res.status(404).send('State not found')
            }
        })
        .catch( err => next(err) )
})

router.patch('/states/:name', function(req, res, next) {
    let stateName = req.params.name
    let stateVisited = req.body.visited

    states.update({ visited: stateVisited }, { where: { name: stateName }})
        .then( rowsUpdated => {
            console.log(rowsUpdated)
            if (rowsUpdated) {
                // The row has been updated, ok
                return res.send('ok')
            } else {
                return res.status(404).send('State not found')
            }
        })
        .catch( err => next(err) )
})

module.exports = router