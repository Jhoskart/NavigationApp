import React, { useContext, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';


// interface RouterPArams {
//     id: number;
//     nombre: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}


const PersonaScreen = ({ route, navigation }: Props) => {

    // const params = route.params as RouterPArams;
    const params = route.params;
    const {changeUsername}= useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    useEffect(() => {
        changeUsername(params.nombre)
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
