import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme'

const ContactScreen = () => {

    const { signIn, authState, logout } = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>ContactScreen</Text>  

            { !authState.isLoggedIn && <Button title="SignIn" onPress={ signIn } /> }

            { authState.isLoggedIn && <Button title="Logout" onPress={ logout } /> }

        </View>
    )
}

export default ContactScreen
