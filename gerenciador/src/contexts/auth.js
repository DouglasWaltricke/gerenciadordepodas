import React, { createContext, useState, useEffect, useContext} from 'react';
import {View, Text, ActivityIndicator, AsyncStorage} from 'react-native'

import api from '../services/api';


const AuthContext = createContext();

export function AuthProvider({children}){

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    async function signIn({email, password}){
    
        
        try{

            const response = await api.post('login',{email, password});

            setUser(response.data.id);
    

            await AsyncStorage.multiSet([
                ['@satc:token', response.data.token],
                ['@satc:user', response.data.id]
            ])

        }catch(error){
            alert('Login ou senha incorretos')
            console.log(error)
        }
      
    }

    async function signOut(){
        AsyncStorage.clear().then(()=>{
            setUser(null)
        })
    }

    async function RegisterAndAuth(email, password){
        signIn({email, password})
    }

    useEffect(()=>{
        async function loadStoragedData(){
           const storagedUser =  await AsyncStorage.getItem('@satc:user');
           const storagedToken = await AsyncStorage.getItem('@satc:token');

           if(storagedUser && storagedToken){
                setUser(storagedUser)
            }
            
            setLoading(false)
        }

        loadStoragedData();

     
    },[])


    return(
        <AuthContext.Provider value={{signed: !!user,user, signIn, signOut, RegisterAndAuth, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)

    return context;
}
