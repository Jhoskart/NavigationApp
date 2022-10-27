import React from 'react';
import { createDrawerNavigator,DrawerContentComponentProps,DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
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
        drawerContent={ (props) => <MenuInterno {...props} />}
        >
        <Drawer.Screen name="StackNavigator" component={ StackNavigator }/>
        <Drawer.Screen name="SettingsScreen" component={ SettingsScreen }/>
        </Drawer.Navigator>
    );
}

const MenuInterno = (props: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>
            <Text>Menu</Text>
        </DrawerContentScrollView>
    )
}
