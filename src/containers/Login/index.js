import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import InputField from '../../components/InputField';
// import { Button, Text } from 'native-base';
import CustomButton from '../../components/CustomButton'



function Login() {

  return (
    <View style={styles.container}>
      <View style={{ width: '90%' }}>
        <InputField
          placeholder = "UserName"
          icon = "person-outline"
        />
        <InputField
          placeholder="Password"
          icon = "lock-closed-outline"
        />
      </View>
        <CustomButton 
          text={"Login"}
          style={styles.customButton}
          />
    </View>
  )
}
export default Login;
