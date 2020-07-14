import React from 'react';

import Dashboard from '../pages/Dashboard';


import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import TabRoutes from './tabs'

import StatusBarCustom from '../components/StatusBarCustom'

import { StatusBar } from 'react-native';

export default function AppRoutes(){

    return(
        <>
            <StatusBar backgroundColor="#4CAF50"></StatusBar>
            <AppStack.Navigator initialRouteName="TabRoutes" screenOptions={{
                headerShown:true 
                }}>
                <AppStack.Screen name="Dashboard" component={Dashboard} options={{
                    headerStyle:{
                        backgroundColor:"#4CAF50",
                    },
                    headerTintColor:"#fff",
                }}></AppStack.Screen>
                <AppStack.Screen name="TabRoutes" component={TabRoutes} options={{
                    headerStyle:{
                        backgroundColor:"#4CAF50",
                    },
                    headerTintColor:"#fff",
                    title:"Gerenciador de poda",
                    headerTitle: props => <StatusBarCustom {...props} />
                    
                }}></AppStack.Screen>
            </AppStack.Navigator>
        </>
    )
}