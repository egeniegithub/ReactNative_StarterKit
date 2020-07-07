/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

// function HomeScreen (props) {
//   console.log('Here Prossss..... : ', props);
  
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button title = {"Button Click Here"} onPress={() => props.navigation.navigate('Profile')} />
//     </View>
//   )
// }

function ProfileScreen () {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  )
}

function HomeScreen ({navigation, route}) {
  React.useEffect(() => {
    console.log('IIIII I I II  II ');
    
    if (route.params?.post) {
      console.log('J J J J  J  J J J J');
    }
  }, [route.params?.post]);

  return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
      title = "Create post"
      onPress = {() => navigation.navigate('CreatePost')}
      />
      <Text style={{margin: 10}}> POST : {route.params?.post}</Text>
    </View>
  )
}

function CreatePostScreen ({navigation, route}) {
  const [postText, setPostText] = React.useState('');
  return (
    <>
    <TextInput
    multiline
    placeholder= "What's on your mind?"
    style={{height: 200, padding: 10, backgroundColor: 'white'}}
    value= {postText}
    onChangeText={setPostText}
    />

    <Button
    title="Done"
    onPress={() => {
      navigation.navigate('Home', {post: postText})
    }}
    />
    </>
  )
}

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component= {HomeScreen} />
      <Stack.Screen name="Profile" component = {ProfileScreen} options={{title: "Test Name"}}/>
      <Stack.Screen name="CreatePost" component = {CreatePostScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
