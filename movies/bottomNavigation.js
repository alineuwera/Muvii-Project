import * as React from 'react';

//screen

import Search from './search1';

// bottom navigator

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SearchItem from './search';
import ChangeProfile from './editprofile';
import Home from './home';
// import Downloaded from './downloaded';
import ListItem from './list';

const Tab = createBottomTabNavigator();

export default function MyButtonBottom(){
    return (
        
            <Tab.Navigator screenOptions={{
                tabBarShowLabel:false,
                tabBarActiveTintColor: "yellow",
                tabBarInactiveTintColor: "lightgray",
                tabBarStyle:{
                    backgroundColor: "#1F2123",
                    borderBlockColor: "transparent",
                }
            }}>
                <Tab.Screen 
                name='Home'
                component={Home}
                options={{headerShown:false,
                    tabBarIcon: ({focused})=>
                        <Feather name='home' size={25} color={focused? "#FDD130":"lightgray"}/>}}/>
                <Tab.Screen name='Search' component={SearchItem}  options={{headerShown:false,
                tabBarIcon: ({focused})=>
                <Ionicons name='search' size={30} color={focused? "#FDD130":"lightgray"}></Ionicons>
                }}/>
                <Tab.Screen name='List' component={ListItem}  options={{headerShown:false,
                 tabBarIcon: ({focused})=>
                 <Feather name='folder' size={25} color={focused? "#FDD130":"lightgray"}/>
                }}/>
                <Tab.Screen name='Profile' component={ChangeProfile} options={{headerShown:false,
                tabBarIcon: ({focused})=>
                <AntDesign name='appstore-o' size={25} color={focused? "#FDD130":"lightgray"}></AntDesign>
                }} />

            </Tab.Navigator>
        
    )
}