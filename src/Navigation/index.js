import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Splash from "../containers/Splash";
import Login from "../containers/Login";
import Home from "../containers/Dashboard/Home";
import Detail from "../containers/Dashboard/Detail";
import SignUp from "../containers/SignUp";



const Tab = createBottomTabNavigator();

function BottomNavigator () {
    return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Detail" component={Detail} />
            </Tab.Navigator>
    )
}

function Navigation () {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Dashboard" component={BottomNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;