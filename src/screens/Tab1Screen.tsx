import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, Button,TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme';

const Tab1Screen = () => {
    return (
        <View style={ styles.globalMargin } >
            <Text style={styles.title} > Iconos </Text>
            
            <Text>
                <Icon name="airplane-outline" size={30} color="#900" />
                <Icon name="airplane-sharp" size={30} color="#900" />
                <Icon name="alarm-outline" size={30} color="#900" />
                <Icon name="alarm-sharp" size={30} color="#900" />
                <Icon name="albums-outline" size={30} color="#900" />
                <Icon name="albums-sharp" size={30} color="#900" />
            </Text>

        </View>
    )
}

export default Tab1Screen
