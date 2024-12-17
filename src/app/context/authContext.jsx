import React, { createContext,useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { redirect } from "react-router";


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null)
    const [isAuthentication, setIsAuthentication] = useState(false)

    useEffect(() => {
        const user_token = Cookies.get("user_token");

        if (user_token !== null) {
            setToken(user_token)
            setIsAuthentication(true)
            redirect(`/workspace`)
        }else {
            redirect(`/`);
            throw new Error("Sem token, realize o login!")
        }
    }, []);

    return (
        <AuthContext.Provider value={{token, isAuthentication, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}
