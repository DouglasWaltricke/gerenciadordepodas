import React, { useState, useContext } from 'react';

import {Text, View, Button, Image} from 'react-native';

import { useAuth } from '../../contexts/auth'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import styles from './styles.js';

import ScreenOne from '../../components/ScreenOne'

import LinearGradient from 'react-native-linear-gradient';

export default function SigIn(){

    const navigator = useNavigation();
    const { signed , signIn } = useAuth()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignIn(){
        signIn({email, password});
    }

    function goToRegister(){
        navigator.navigate('Register')
    }

    function goToLogin(){
        navigator.navigate('Login')
    }


    
    return (
        <View style={styles.signInContainer}>
            <ScreenOne />
            <View style={styles.signInActions}>
               <TouchableOpacity onPress={goToLogin}>
                    <LinearGradient colors={['#4CAF50', '#69F0AE']}  start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.specialButton}>
                        <Text style={{color:'white',fontSize:18,fontWeight:'bold', height:25}}>
                            Acessar minha conta
                        </Text>
                    </LinearGradient>
               </TouchableOpacity>
                <Text style={{marginTop:35, color:'grey'}}>Não possui uma conta?</Text>
                <TouchableOpacity title="Cadastrar-me" onPress={goToRegister} style={{marginTop:15}}>
                    <Text style={styles.hiperTextButton}>Cadastrar-me</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}