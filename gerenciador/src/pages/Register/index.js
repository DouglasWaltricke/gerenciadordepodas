import React, { useState} from 'react'

import {Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native'

import { useNavigation } from '@react-navigation/native';

import { TextInput, useTheme, Button } from 'react-native-paper';

import styles from './styles';

import api from '../../services/api';
import { useAuth } from '../../contexts/auth';
import { ScrollView } from 'react-native-gesture-handler';

export default function Register(){

    const navigator = useNavigation();

    const { RegisterAndAuth } = useAuth()

    const [name,setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [whatsapp, setWhatsapp] = useState(null);
    const [city, setCity] = useState(null);
    const [uf, setUf] = useState(null);

    async function handleRegister(){
        try{
            const response = await api.post('account',{password, name, email})
      
            alert("Bem vindo")

            RegisterAndAuth(response.data.email, response.data.password)

        }catch(error){
            alert("Ops! preencha os campos corretamente")
            console.log(error)
        }
    }


    function voltar(){
        navigator.goBack()
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.actionsContainer}>
                    <TextInput style={styles.inputStyle}  label="Nome"  type="outlined" value={name} onChangeText={text => setName(text)}></TextInput>
                    <TextInput style={styles.inputStyle}  label="Email"  value={email} onChangeText={text => setEmail(text)}></TextInput>
                    <TextInput style={styles.inputStyle}  label="Password"  value={password} onChangeText={text => setPassword(text)}></TextInput>
                    <Button mode="contained" onPress={() => {handleRegister()}} style={{marginTop:50}} dark={true}>
                        Cadastrar-me
                    </Button>
                    <Text style={{textAlign:'center', paddingTop:20,paddingBottom:15}}>Ou</Text>
                    <Button onPress={() => {voltar()}}>
                        Voltar
                    </Button>
                </View>
            </View>
        </ScrollView>
        
    )
}