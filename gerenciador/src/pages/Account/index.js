import React, { useState, useEffect} from 'react'

import {Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native'

import { useNavigation } from '@react-navigation/native';

import { TextInput, useTheme, Button } from 'react-native-paper';

import styles from './styles';

import api from '../../services/api';
import { useAuth } from '../../contexts/auth';
import { ScrollView } from 'react-native-gesture-handler';

export default function Account(){

    const navigator = useNavigation();

    const { signOut } = useAuth();

    const [name,setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [id, setId] = useState(null);

    async function handleUpdate(){
        try{
            const response = await api.put('account',{id, password, name, email})
      
            alert("Dados atualizados")

        }catch(error){
            alert("Ops! preencha os campos corretamente")
            console.log(error)
        }
    }

    function signOutAccount(){
        signOut();
    }

    useEffect(()=>{
        loadAccount();
    },[])

    async function loadAccount(){
        try{
            const response = await api.get('account/recuperarAccount')

            setName(response.data.name);
            setEmail(response.data.email);
            setPassword(response.data.password);
            setId(response.data.id)
            
        }catch(error){
            console.log(error)
        }
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.header}>Minha conta</Text>
                <View style={styles.actionsContainer}>
                    <TextInput style={styles.inputStyle}  label="Nome"  type="outlined" value={name} onChangeText={name => setName(name)}></TextInput>
                    <TextInput style={styles.inputStyle}  label="Email"  value={email} onChangeText={email => setEmail(email)}></TextInput>
                    <TextInput style={styles.inputStyle}  label="Password"  value={password} onChangeText={password => setPassword(password)}></TextInput>
                    <Button mode="contained" onPress={() => {handleUpdate()}} style={{marginTop:25}} dark={true}>
                        Atualizar dados
                    </Button>
                    <Text style={{textAlign:'center', paddingTop:10,paddingBottom:5}}>Ou</Text>
                    <Button mode="text" onPress={() => {signOutAccount()}} style={{marginTop:0}}>
                       Sair
                    </Button>
                    
                </View>
            </View>
        </ScrollView>
        
    )
}