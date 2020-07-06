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

const App = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log('Here in Use Effect... ');
  //  this.myTime = setInterval(() => {
      
  //   }, 5000);

    return function cleanUp () {
      console.log('Here is Component Wll UnMounttt.... ');
      // clearInterval(this.myTime);
    }
  }, []);
  console.log('Here is Custom Render11111');
  
  return (
    <>
    <Text>
      Here is Test One
    </Text>
    <Text style={{margin: 50}}>
      {`Here is Second ${count}`}
    </Text>

    <Button 
    title={'Incease Count'}
    onPress = {() => setCount(count + 1)}
    />
     
    </>
  );
};


export default App;
