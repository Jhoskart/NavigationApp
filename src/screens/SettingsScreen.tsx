import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

const SettingsScreen = () => {

    const { authState } = useContext(AuthContext);

    return (
        <View>
            <Text style={ styles.title }> SettingsScreen </Text>

            <Text>{ JSON.stringify( authState, null, 4 ) }</Text>
        </View>
    )
}

export default SettingsScreen
