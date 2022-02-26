export const reducer = (state = {}, action) => {
// console.log(action)
    if (action.type == "USERS_LIST") {
        return { ...state, usersList: action.payload }
    }

    if (action.type == 'USERS_DETAILS') {
        return { ...state, details: action.payload }
    }

    if (action.type == 'CLEAR_DETAILS') {
        return { ...state, details: action.payload }
    }

    return state
}