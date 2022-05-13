import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },

    getVisited() {
        return axios.get('/api/states/visited').then( response => {
            return response.data
        })
    },

    setVisited(stateName, visited) {
        //Updates a state in a database
        let requestData = { visited: visited }
        console.log(stateName)
        return axios.patch('/api/states/' + stateName, requestData).then( response => {
            return response.data
        })
    },
    getOneState(stateName) {
        return axios.get(`/api/state/${stateName}`).then( response => {
            return response.data
        })
    }
}