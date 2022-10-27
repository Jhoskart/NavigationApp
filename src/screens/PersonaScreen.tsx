import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const PersonaScreen = ({ route, navigation }: Props) => {

    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> 
            {
                JSON.stringify(params, null, 3)
            }
            </Text>
        </View>
    )
}

export default PersonaScreen
