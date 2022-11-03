import React from 'react';
import { createDrawerNavigator,DrawerContentComponentProps,DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../screens/SettingsScreen';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

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
        <Drawer.Screen name="Tabs" component={ Tabs }/>
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
                    onPress={ () => props.navigation.navigate('Tabs') }
                >
                    <Icon name="compass-outline" size={23} color="white" />
                    <Text style={ styles.menuTexto }>Navegacion</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={ () => props.navigation.navigate('SettingsScreen') }
                >
                    <Icon name="cog-outline" size={23} color="white" />
                    <Text style={ styles.menuTexto }>Ajustes</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    )
}
