import React from 'react';
import { Text, Platform } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
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
            screenOptions={ ({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'AlbumsScreen':
                            iconName = 'albums-outline';
                            break;
                        case 'ChatScreen':
                            iconName = 'chatbox-outline';
                            break;
                        case 'ContactScreen':
                            iconName = 'people-outline';
                            break;
                    }
                    return <Icon name={iconName} size={20} color={color} />
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
            })}
            
        >
            <Tab.Screen name="AlbumsScreen" options={{ title: 'Album' }} component={AlbumsScreen} />
            <Tab.Screen name="ChatScreen" options={{ title: 'Chat' }} component={ChatScreen} />
            <Tab.Screen name="ContactScreen" options={{ title: 'Contact' }} component={ContactScreen} />
        </Tab.Navigator>
    );
}