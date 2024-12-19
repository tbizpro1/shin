import React, { createContext,useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { redirect } from "react-router";
import { GetUser } from "../api/get/user-profile";


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null)
    const [isAuthentication, setIsAuthentication] = useState(false)
    const [userId, setUserId] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const userToken = Cookies.get("token");
        //chama a funcao que retorna os dados do usuario
        const userId = Cookies.get("user_id");
        //.then recolhe a resposta da funcao GetUser (api)
        GetUser(userId, userToken).then(response=>{setUser(response.data)})
        console.log(user,'context')
        
        if (userToken !== null) {
            setToken(userToken)
            setIsAuthentication(true)
            redirect(`/workspace`)
        }else {
            redirect(`/`);
            throw new Error("Sem token, realize o login!")
        }
        //controla as atualizacoes que estao dentro do componente
    }, [userId, token]);

    return (
        <AuthContext.Provider value={{token, isAuthentication, setToken, setUserId, userId, user}}>
            {children}
        </AuthContext.Provider>
    )
}
