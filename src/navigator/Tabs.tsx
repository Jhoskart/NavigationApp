import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text, Platform } from 'react-native';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';
import { colores } from '../theme/appTheme';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />
}

const materialTab = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <materialTab.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colores.primary
            }}
            screenOptions={{
                tabBarIcon: ({ color, focused }) => {
                    return <Text style={{ color }}>{focused ? '🔥' : '🌶'}</Text>
                }
            }}
        >
            <materialTab.Screen name='Tab1Screen' options={{ title: "Tab1" }} component={ Tab1Screen } />
            <materialTab.Screen name='Tab2Screen' options={{ title: "Tab2" }} component={ TopTabNavigator } />
            <materialTab.Screen name='StackNavigator' options={{ title: "Stack" }} component={ StackNavigator } />
        </materialTab.Navigator>
    );
}

const { Navigator, Screen } = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderWidth: 0,
                    elevation: 0,
                    height: 75,
                    borderTopColor: 'transparent'
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({ color, focused }) => {
                    return <Text style={{ color }}>{focused ? '🔥' : '🌶'}</Text>
                }
            }}
        >
        {/* <Tab.Screen name='Tab1Screen' options={{ title: "Tab1", tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={ Tab1Screen } /> */}
        <Screen name='Tab1Screen' options={{ title: "Tab1" }} component={ Tab1Screen } />
        <Screen name='Tab2Screen' options={{ title: "Tab2" }} component={ TopTabNavigator } />
        <Screen name='StackNavigator' options={{ title: "Stack" }} component={ StackNavigator } />
        </Navigator>
    );
}