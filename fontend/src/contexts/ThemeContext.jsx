import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const ThemeReducer = (state , action ) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                theme: action.payload,
            };
        default:
            return state;
    }
};
export const ThemeContextProvider = ({ children }) => {

    let [state , dispatch] = useReducer(ThemeReducer , {theme : "light"});

    let isDark = state.theme === "dark";

    let changeTheme = (theme) => {
        dispatch({
            type: "CHANGE_THEME",
            payload: theme
        });
    }
    return (
    <ThemeContext.Provider value={{...state , changeTheme, isDark}}>
        {children}
    </ThemeContext.Provider>)
};
