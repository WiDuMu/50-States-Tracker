import axios from 'axios'

export default {
    getAllStates() { // get all states
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },

    getVisited() { // Get a list of states visited
        return axios.get('/api/states/visited').then( response => {
            return response.data
        })
    },

    setVisited(stateName, visited) { // Change a state
        //Updates a state in a database
        let requestData = { visited: visited }
        console.log(stateName)
        return axios.patch('/api/states/' + stateName, requestData).then( response => {
            return response.data
        })
    },
    getOneState(stateName) { // Get one state
        return axios.get(`/api/state/${stateName}`).then( response => {
            return response.data
        })
    },
    getStateFact(stateName) { // Get a fun fact about a state
        return axios.get(`https://state-facts.herokuapp.com/api/fact/${stateName}`)
        .then( response => {
            return response.data
        })
    }
}