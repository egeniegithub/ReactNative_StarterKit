import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import styles from './styles';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton'

function onPressLoginButton (navigation) {
  navigation.navigate('Dashboard');
}

function Login({navigation}) {

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
          onPressLoginButton = {() => onPressLoginButton(navigation)}
          />

          <View style={styles.signupTextContainer}>
          <Text>Don't have account? </Text>
          <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          >
          <Text style={styles.signupText}>SignUp</Text>
          </TouchableOpacity>
          </View>
    </View>
  )
}
export default Login;
