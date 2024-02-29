import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import GetStarted from './movies/getstarted';
import WatchMovie from './movies/watchmovie';
import Registers from './movies/register';
import SignIn from './movies/signin';
import Home from './movies/home';
import Search from './movies/search';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Muvii from './movies/muvi';
import SearchItem from './movies/search';
import ListItem from './movies/list';
import Downloaded from './movies/downloaded';
// import ChangeProfile from './movies/editprofile';
const image = require("./images/logo.jpg");
var Stack=createStackNavigator();
import React from 'react';
import MyButtonBottom from './movies/bottomNavigation';

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='muvi'>
    <Stack.Screen name="muvi" component={Muvii} options={{headerShown:false}}/>
    <Stack.Screen name="Home" component={MyButtonBottom} options={{headerShown:false}}/>
    <Stack.Screen name="start" component={GetStarted} options={{headerShown:false}}/>
    <Stack.Screen name="watch" component={WatchMovie} options={{headerShown:false}}/>
    <Stack.Screen name="signup" component={Registers} options={{headerShown:false}}/>
    <Stack.Screen name="sign" component={SignIn} options={{headerShown:false}}/>
    <Stack.Screen name="search" component={SearchItem} options={{headerShown:false}}/>
    <Stack.Screen name="download" component={Downloaded} options={{headerShown:false}}/>
   
    </Stack.Navigator>
  </NavigationContainer>
    
  
    
  );
}


