import axios from "axios"

const baseUrl = 'https://jsonplaceholder.typicode.com/users'



export const getUsersData = async () => {

    let allUsers = [];

    await axios.get(baseUrl)
        .then((response) => {
            allUsers = response.data
        })
        .catch((error) => {
            console.log(error)
        })
    return {
        type: 'USERS_LIST',
        payload: allUsers
    }
}

export const getUserDetails = async (id) => {

    let details = [];

    await axios.get(`${baseUrl}/${id}`)
        .then((response) => {
            details = response.data
        })
        .catch((error) => {
            console.log(error)
        })
    return {
        type: 'USERS_DETAILS',
        payload: details
    }
}


export const clearDetails = () => {
    return {
        type: 'CLEAR_DETAILS',
        payload: {}
    }
}