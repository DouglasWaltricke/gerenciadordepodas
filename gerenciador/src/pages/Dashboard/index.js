import React, { useState, useContext, useEffect } from 'react';

import {View, Text, Button, AsyncStorage} from 'react-native';
import { useAuth } from '../../contexts/auth';


import api from '../../services/api';

import { useNavigation } from '@react-navigation/native';

import { Appbar } from 'react-native-paper'

export default function Dashboard(){

    navigator = useNavigation()

    const { signOut } = useAuth()
    const [ongs, setOngs] = useState([])


    useEffect(()=>{
        loadOngs()
    },[])

    async function loadOngs(){
        try{
            const response = await api.get('recuperarOng')
            // setOngs(response.data)
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
       
    }

    function handleSignOut(){
        signOut()
    }
    return (
        <View>
            <Text>HAHAHAS</Text>
        </View>
    )
}