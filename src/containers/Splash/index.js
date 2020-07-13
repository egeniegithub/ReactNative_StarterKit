import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';


function Splash ({navigation}) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000)
    }, []);

    return(
        <View style={styles.container}> 
            <Text style={styles.splashText}> Splash Screen </Text>
        </View>
    )
}

export default Splash;