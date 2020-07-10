import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton'


function SignUp() {
    return (
        <View style={styles.container}>
            <View style={{ width: '90%' }}>
                <InputField
                    placeholder="UserName"
                />
                <InputField
                    placeholder="Age"
                />
                <InputField
                    placeholder="Password"
                />
            </View>
            <CustomButton
                text={"SignUp"}
                style={styles.customButton}
            />
        </View>
    )
}

export default SignUp;