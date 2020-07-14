import React, { useState, useContext, } from 'react';

import {View, Text, TouchableOpacity, TextInput, Image, ImageBackground} from 'react-native'


import { useAuth } from '../../contexts/auth'
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/NCUSTOM.png'
import backgroundLogin from '../../assets/backgroundlogin.png'

import Icon from 'react-native-vector-icons/Ionicons';


import styles from './styles'



export function Chevron(){
    return (
        <View style={styles.pacman}/>
      )
}
export default function Login(){
    
    const navigator = useNavigation();
    const { signed , signIn } = useAuth()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignIn(){
        signIn({email, password});
    }

    function goToLogin(){
        navigator.navigate('Login')
    }



    return(
        <View style={styles.container}>
            <ImageBackground source={backgroundLogin} style={styles.backgroundLogin}>
                <View style={styles.header}>
                    <View>
                        <Image source={logoImg}></Image>
                    </View>
                </View>
                <View style={styles.actionsButton}>
                   
                    <View  style={styles.inputLogin}>
                        <Icon name="person-outline" size={20} color="#4CAF50" style={{position:'absolute',left:20,top:15}} />
                        <TextInput placeholder="E-mail" placeholderTextColor="#4CAF50" value={email} onChangeText={ (email) => { setEmail(email) } }></TextInput>
                    </View>
                    <View  style={styles.inputLogin}>
                        <Icon name="md-lock-closed-outline" size={20} color="#4CAF50" style={{position:'absolute',left:20,top:15}} />
                        <Icon name="eye-outline" size={20} color="#4CAF50" style={{position:'absolute',right:20,top:15}} />
                        <TextInput placeholder="Senha" placeholderTextColor="#4CAF50" value={password} onChangeText={ (password)=> { setPassword(password) } }></TextInput>
                    </View>
                   
                    <TouchableOpacity title="Cadastrar-me" style={styles.buttonLogIn} onPress={ () => {handleSignIn({email, password})} }>
                        <Text style={styles.buttonLogInText}>Entrar</Text>
                    </TouchableOpacity> 
                </View>
            </ImageBackground>
           
        </View>
    )
}