import React, { useEffect, useState } from 'react';

import { View, Text, TouchableOpacity, Image, FlatList, AsyncStorage } from 'react-native';
import { useAuth } from '../../contexts/auth';
import { Card, Title, Paragraph, Button  } from 'react-native-paper';

import api from '../../services/api'

import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

export default function OcurrencesFinished(){
    
    const [ocorrencias, setOcorrencias] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPaginas, setTotalPaginas] = useState(1)
    const [total, setTotal] = useState(0);

    async function loadOcurrences(){
        if(loading) return;
        
        if(page > totalPaginas) return;
       
        setLoading(true)

        try{
     
            const response = await api.get('ocorrencia',{
                params:{page, done:true}
            });


            setOcorrencias([...ocorrencias,...response.data])
       
            setTotal(response.headers['x-total-count'])
            setTotalPaginas(response.headers['x-total-pages'])

            setLoading(false)
            setPage(page+1)

        }catch(error){
            console.log(error)
            setLoading(false)
            
        }
    }

    useEffect(()=>{
    
        loadOcurrences()

    },[ocorrencias])

    async function handleFinishOcurrence(id){

        try{
            const retorno = await api.post('ocorrencia/finalizarOcorrencia', {id:id});
            alert("Ocorrência finalizada!")

            let ocorrenciasAux = ocorrencias.filter((ocorrencia)=>{
                return ocorrencia.id != id
            })

            setOcorrencias(ocorrenciasAux)
            
        }catch(error){
            console.log(error)
        }
    }


    return(
        <View>
            <Text style={{textAlign:'center',fontSize:20,paddingTop:25}}>Finalizadas</Text>
            <View style={{paddingRight:20,paddingLeft:20,marginBottom:155}}>
                <FlatList data={ocorrencias} showsVerticalScrollIndicator={true} keyExtractor={ ocorrencia => String(ocorrencia.id) } onEndReached={loadOcurrences}
                    renderItem = { ({item : ocorrencia}) =>(
                   
                    <Card style={{marginTop:20}}>
                        <Card.Content>
                            <Title>{ocorrencia.title}</Title>
                            <Paragraph>{ocorrencia.description}</Paragraph>
                            <Paragraph>{ocorrencia.effectiveDate}</Paragraph>
                            <Paragraph>{ocorrencia.done ? 'Finalizada' : 'Não finalizada'}</Paragraph>
                            <Button icon="map" mode="text" onPress={() => console.log('Pressed')} style={{alignItems:'flex-start'}}>
                                Abrir no mapa
                            </Button>
                        </Card.Content>
                    </Card>

                    )}
                />
            </View>
        </View>
       
       
    )
}