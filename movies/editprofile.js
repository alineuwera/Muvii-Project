import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, { useContext } from 'react';
import { changeIntoMode } from './themeModel';




export default function ChangeProfile({navigation}) {
    const {mode,changeMode}=useContext(changeIntoMode)
    return(
        <View  style= {{width: "100%", height: "100%", backgroundColor: mode?"black":"white"}}>
            <View style= {{ display: "flex", flexDirection: "row", backgroundColor: "#1f2123"}}>
            <Ionicons onPress={()=>navigation.navigate("Home")} name='arrow-back' style= {{fontSize: 22, color: "#FDD130", marginTop:40,paddingLeft:10}}></Ionicons>
            <Text style= {{color: "white", marginLeft: "2%", fontWeight: "bold",fontSize: 18,marginTop:40, paddingBottom: 12}}>Edit Profile</Text>
            <TouchableOpacity onPress={()=>{changeMode()}} style={{}}>
                <Text style={{color: "white",fontWeight: "bold",fontSize: 18,marginTop:40,  marginLeft:"49%",backgroundColor: "#FDD130", marginBottom:10, borderRadius:10,display:"flex", alignSelf:"center",padding:3}}>darkmode</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Image source={require('../images/aline.jpeg')} style= {{width: 90, height:90, borderRadius: 80,display: "flex", justifyContent: "center", alignSelf: "center",marginTop: 25}}/>
            <TouchableOpacity style= {{borderWidth:1, borderColor: "white", display: "flex",flexDirection:"row", width:120, alignSelf:"center",borderRadius:6,padding:1,marginTop:8}}>
                <FontAwesome name='edit' style={{color: "#FDD130", fontSize:18}}></FontAwesome>
                <Text style= {{color:"white"}}>Change Avatar</Text>
            </TouchableOpacity>
        </View>
        {/* <ScrollView> */}
        <View style={{height:"42%"}}>
        <TextInput
        mode=''
        textColor='white'
        label={"Email Addres"}
        theme={{colors:{primary: "#FDD130"}}}
        right= {<TextInput.Icon icon="email-outline" color={"#FDD130"}/>}
        style= {{backgroundColor: "transparent", width: "95%",alignSelf: "center"}}>
        </TextInput>
        <TextInput
        mode=''
        textColor='white'
        label={"FullName"}
        theme={{colors:{primary: "#FDD130"}}}
        right= {<TextInput.Icon icon="account-outline" color={"#FDD130"}/>}
        style= {{backgroundColor: "transparent", width: "95%",alignSelf: "center", }}>
        </TextInput>
        <TextInput
        mode=''
        textColor='white'
        label={"Change Password"}
        theme={{colors:{primary: "#FDD130"}}}
        secureTextEntry
        right= {<TextInput.Icon icon="lock-outline" color={"#FDD130"}/>}
        style= {{backgroundColor: "transparent", width: "95%",alignSelf: "center"}}>
        </TextInput>
        <TextInput
        mode=''
        textColor='#FDD130'
        secureTextEntry
        label={"Confirm Password"}
        theme={{colors:{primary: "#FDD130"}}}
        right= {<TextInput.Icon icon="lock-outline" color={"#FDD130"}/>}
        style= {{backgroundColor: "transparent", width: "95%",alignSelf: "center"}}>
        </TextInput>
        <TextInput
        mode=''
        textColor='white'
        label={"Phone"}
        theme={{colors:{primary: "#FDD130"}}}
        right= {<TextInput.Icon icon="phone-outline" color={"#FDD130"}/>}
        style= {{backgroundColor: "transparent", width: "95%",alignSelf: "center", }}>
        </TextInput>
        <TextInput
        mode=''
        textColor='white'
        label={"Gender"}
        theme={{colors:{primary: "#FDD130"}}}
        right= {<TextInput.Icon icon="heart-outline" color={"#FDD130"}/>}
        style= {{backgroundColor: "transparent", width: "95%",alignSelf: "center"}}>
        </TextInput>
        <TouchableOpacity  style= {{backgroundColor: "#FDD130", padding: 12, borderRadius: 3, alignSelf: "center", width: "89%", marginTop: "7%"}}>
        <Text style= {{textAlign: "center"}}>Save Changes</Text>
      </TouchableOpacity>
      {/* </ScrollView> */}
      </View>
        <StatusBar style='light'/>
        </View>
    )
    
}