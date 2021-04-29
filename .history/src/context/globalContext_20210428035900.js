import React, { createContext, useReducer } from 'react';



// Define GlobalContext
const isBrowser = typeof window !== "undefined";

const INITIAL_STATE = {
    currentTheme: isBR && window.localStorage.getItem('theme') === null ? "dark" : window.localStorage.getItem('theme'),
    currentTheme:  "dark",

    cursorType: false,
    cursorStyles: ['pointer', 'hovered']

}

export const GlobalStateContext = createContext(INITIAL_STATE);


// reducer
const globalReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'TOGGLE_THEME':
            return {
                ...state, currentTheme: action.theme
            }
        case 'CURSOR_TYPE':
            return {
                ...state,
                cursorType: action.cursorType
            }
        default:
            // throw new Error(`Unhandled action type: ${action.type}`)
            return state;
            
    }
}

export const GlobalStoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, INITIAL_STATE)
    return (
            <GlobalStateContext.Provider value={[state, dispatch]}>
                {children}
            </GlobalStateContext.Provider>
    )
}


