import React from 'react';
import { Text, Platform } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AlbumsScreen from '../screens/AlbumsScreen';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import { colores } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={{
                tabBarIcon: ({ color }) => {
                    return <Text style={{ color }}>{'🔥'}</Text>
                },
                tabBarActiveTintColor: colores.primary,
                tabBarPressColor: colores.primary,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary
                },
                tabBarStyle: {
                    shadowColor: 'transparent',
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 10
                },
                tabBarShowIcon: true,
            }}
            
        >
            <Tab.Screen name="AlbumsScreen" options={{ title: 'Album' }} component={AlbumsScreen} />
            <Tab.Screen name="ChatScreen" options={{ title: 'Chat' }} component={ChatScreen} />
            <Tab.Screen name="ContactScreen" options={{ title: 'Contact' }} component={ContactScreen} />
        </Tab.Navigator>
    );
}