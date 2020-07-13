import React from 'react';
import { View } from 'react-native';
import { Container, Content } from 'native-base';
import styles from './styles';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';

function backArrowPress (props) {
    props.navigation.goBack();
}

function SignUp(props) {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader
                title="Sign Up"
                leftIcon="arrow-back"
                onPress={() => backArrowPress(props)}
            />
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
        </View>
    )
}

export default SignUp;