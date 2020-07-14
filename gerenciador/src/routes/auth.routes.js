import React from 'react';

import { StatusBar } from 'react-native'; 
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import Login from '../pages/Login';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();


export default function AuthRoutes(){
    return(
        <>
            <StatusBar backgroundColor="#4CAF50"></StatusBar>
            <AuthStack.Navigator screenOptions={{headerShown:false}}>
                <AuthStack.Screen name="SignIn" component={SignIn}></AuthStack.Screen>
                <AuthStack.Screen name="Register" component={Register}></AuthStack.Screen>
                <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
            </AuthStack.Navigator>
        </>
    )
}