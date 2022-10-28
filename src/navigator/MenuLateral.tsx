import React from 'react';
import { createDrawerNavigator,DrawerContentComponentProps,DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { styles } from '../theme/appTheme';

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
            {/* Parte del Avatar */}
            <View style={ styles.avatarContainer }>
                <Image
                    source={{
                        uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones de menu */}
            <View style={ styles.menuContainer }>
                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={ () => props.navigation.navigate('StackNavigator') }
                >
                    <Text style={ styles.menuTexto }>Navegacion</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={ () => props.navigation.navigate('SettingsScreen') }
                >
                    <Text style={ styles.menuTexto }>Ajustes</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    )
}
