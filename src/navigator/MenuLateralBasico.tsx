import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
    return (
        <Drawer.Navigator
        screenOptions={{
            drawerStyle: {
                backgroundColor: '#5856D6',
                paddingTop: 20
            }, 
            drawerActiveTintColor: '#fff',
            drawerActiveBackgroundColor: 'transparent',
            drawerInactiveTintColor: 'orange',
            drawerLabelStyle: {
                fontSize: 20
            }
        }}
        >
        <Drawer.Screen name="StackNavigator" component={ StackNavigator } options={{ title: "Home" }}/>
        <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } options={{ title: "Settings" }}/>
        </Drawer.Navigator>
    );
}