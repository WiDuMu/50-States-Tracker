let express = require('express')
let states = require('../models').States

let router = express.Router()

router.get('/states', function(req, res, next) { // get all states
    states.findAll({ order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch( err => next(err) )
})

router.get('/states/visited', function(req, res, next) { // get states that have been visited
    states.findAll({where: {visited: true}, order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch( err => next(err) )
})

router.get('/state/:name', function(req, res, name) { // get one state
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

router.patch('/states/:name', function(req, res, next) { // change a state
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