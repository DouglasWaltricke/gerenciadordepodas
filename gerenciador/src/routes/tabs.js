import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

import Ocurrences from '../pages/Ocurrences'
import OcurrencesFinished from '../pages/OcurrencesFinished';
import Account from '../pages/Account';

export default function TabRoutes(){
    return(
        <Tab.Navigator 
            tabBarOptions={{
                inactiveTintColor:"white",
                activeTintColor:"#673AB7",
                activeBackgroundColor:"#4CAF50",
                inactiveBackgroundColor:"#4CAF50",
                labelStyle: {
                    fontSize: 12,
                    paddingBottom:8
                },
                tabStyle: {
                    fontSize: 10,
                    paddingTop:5
                }
        }}>
            <Tab.Screen name="Ocurrences" component={Ocurrences}
                options={{
                    tabBarLabel: 'Ordens de serviço',
                    tabBarIcon: ({ focused, color, size }) => ( <Icon name="list" color={ focused ? '#673AB7' : 'white'} size={26} /> )
                    }}
            ></Tab.Screen>
             <Tab.Screen name="OcurrencesFinished" component={OcurrencesFinished}
                 options={{
                    tabBarLabel: 'Ordens de serviço',
                    tabBarIcon: ({ focused, color, size }) => ( <Icon name="checkmark-done" color={ focused ? '#673AB7' : 'white'} size={26} /> ),
                    }}
            
            ></Tab.Screen>
             <Tab.Screen name="Account" component={Account}
                 options={{
                    tabBarLabel: 'Minha conta',
                    tabBarIcon: ({ focused, color, size }) => ( <Icon name="person" color={ focused ? '#673AB7' : 'white'} size={20} /> ),
                    }}
            
            ></Tab.Screen>

        </Tab.Navigator>
    )
}
