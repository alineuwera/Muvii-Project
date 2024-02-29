import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from './search1';
import React from 'react';



export default function SearchItem({navigation}) {
    return(
      <View style= {{width: "100%", height:"100%", backgroundColor: "#26282c"}}>
        <View style= {{backgroundColor: "#1f2123"}}>
          <TextInput
        mode=''
        textColor='white'
        theme={{colors: {primary:"#FDD130"}}}
        label={"Search Movie Title"}
        right= {<TextInput.Icon icon="magnify" color={"#FDD130"}/>}
        style= {{backgroundColor: "transparent", width: "95%",alignSelf: "center", marginTop: 22, color: "white"}}>
        </TextInput>
        <View>
            <Search/>
        </View>
        </View>
        <View style= {{ display:"flex", alignItems: "center", width:"100%",height: "35%",justifyContent:"center"}}>
            <Image source={require("../images/search.png")} style= {{alignSelf: "center", width: 180, height: 150}}/>
        </View>
        <View>
            <Text style= {{color: "white", display: "flex", justifyContent: "center", alignSelf: "center",fontSize: 20, fontWeight: "bold"}}>Find your Movie</Text>
            <Text style= {{color: "white", display: "flex", justifyContent: "center", alignSelf: "center", fontWeight: 300, marginTop: 6}}>Search Movie,Series, Original, as you like</Text>
        </View>
        <StatusBar style="light" />
      </View>
           
    )
    
    
    
}


