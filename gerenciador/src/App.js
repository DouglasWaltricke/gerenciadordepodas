import React from 'react';

import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './contexts/auth'

import AuthContext from './contexts/auth'

import Routes from './routes';

import { navigationRef } from './routes/rootNavigation';

export default function App(){

    return(
       <NavigationContainer ref={navigationRef}>
           <AuthProvider>
                <Routes />
           </AuthProvider>
        </NavigationContainer>
    )
}