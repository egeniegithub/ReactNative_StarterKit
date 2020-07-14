import React from 'react';
import { Spinner, View } from 'native-base';
import * as colors from '../../Theme/Color';
import styles from '../Login/styles';

function LogOut() {

    return (
        <View style={styles.container}>
            <Spinner color={colors.Green} />
        </View>
    )
}

export default LogOut;