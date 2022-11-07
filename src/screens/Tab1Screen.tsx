import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, Button,TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
    return (
        <View style={ styles.globalMargin } >
            <Text style={styles.title} > Iconos </Text>
            
            <Text>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="airplane-sharp" />
                <TouchableIcon iconName="alarm-outline" />
                <TouchableIcon iconName="alarm-sharp" />
                <TouchableIcon iconName="albums-outline" />
                <TouchableIcon iconName="albums-sharp" />
            </Text>

        </View>
    )
}

export default Tab1Screen
