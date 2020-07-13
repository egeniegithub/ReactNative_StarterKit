import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/UserAction'
import styles from './styles';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton'


async function onPressLoginButton(props) {
  // navigation.navigate('Dashboard');

  let dataRedux = await props.login('hamza3', 'hamza3');
  console.log('dataRedux  : ', dataRedux);

}

function Login(props) {

  return (
    <View style={styles.container}>
      <View style={{ width: '90%' }}>
        <InputField
          placeholder="UserName"
          icon="person-outline"
        />
        <InputField
          placeholder="Password"
          icon="lock-closed-outline"
        />
      </View>
      <CustomButton
        text={"Login"}
        style={styles.customButton}
        onPressLoginButton={() => onPressLoginButton(props)}
      />

      <View style={styles.signupTextContainer}>
        <Text>Don't have account? </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignUp')}
        >
          <Text style={styles.signupText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    userObject: state.user.userObject,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (userName, password) => dispatch(actions.setLogin(userName, password)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
