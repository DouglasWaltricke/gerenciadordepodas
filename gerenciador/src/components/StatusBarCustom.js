import React from 'react'
import { Appbar } from 'react-native-paper';

export default function StatusBarCustom(){
    return (
        <Appbar.Header dark={true} style={{backgroundColor:'transparent'}}>
            <Appbar.Content title="Gerenciador de poda" subtitle="" />
            <Appbar.Action icon="magnify"  />
            <Appbar.Action icon="dots-vertical"  />
        </Appbar.Header>
    )
}