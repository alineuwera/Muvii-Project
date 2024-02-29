import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from './search1';
import React from 'react';



export default function ListItem({navigation}) {
    return(
      <View style= {{width: "100%", height:"100%", backgroundColor: "#26282c"}}>
        <View style= {{backgroundColor: "#1f2123"}}>
          <Text style={{color: "white",marginTop:55, fontWeight: "bold", fontSize:20, paddingBottom: 12,paddingLeft:10}}>My List</Text>
        </View>
        <View style= {{ display:"flex", alignItems: "center", width:"100%",height: "35%",justifyContent:"center"}}>
            <Image source={require("../images/list.png")} style= {{alignSelf: "center", width: 120, height: 120}}/>
        </View>
        <View>
            <Text style= {{color: "white", display: "flex", justifyContent: "center", alignSelf: "center",fontSize: 20, fontWeight: "bold"}}>Create my own list</Text>
            <Text style= {{color: "white", display: "flex", justifyContent: "center", alignSelf: "center", fontWeight: 300, marginTop: 6,alignItems: "center",width:"50%"}}>Let's do something, because i have nice surprise for you.</Text>
        </View>
        <TouchableOpacity  style= {{backgroundColor: "#FDD130", padding: 12, borderRadius: 3, alignSelf: "center", width: "89%", marginTop: "50%"}}>
        <Text style= {{textAlign: "center"}}>Explore Movie</Text>
      </TouchableOpacity>
        <StatusBar style="light" />
      </View>
           
    )
    
    
    
}


