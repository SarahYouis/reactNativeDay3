import { createContext, useReducer } from "react";
import { reducer } from "../reducers/reducer";

export const UsersContext = createContext();

export default UsersContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, {
        usersList: [],
        details: []
    })
    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {children}
        </UsersContext.Provider>
    )
}

