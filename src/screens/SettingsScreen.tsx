import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {

    const { authState } = useContext(AuthContext);

    return (
        <View>
            <Text style={ styles.title }> SettingsScreen </Text>

            <Text>{ JSON.stringify( authState, null, 4 ) }</Text>

            {
                authState.favoriteIcon && (
                    <Icon
                        name={ authState.favoriteIcon }
                        size={ 150 }
                        color={colores.primary}
                    />
                )
            }

        </View>
    )
}

export default SettingsScreen
