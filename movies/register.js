import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions} from 'react-native';
import { TextInput } from 'react-native-paper';
const image = require("../images/logo.jpg");
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign"
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width
export default function Registers({navigation}) {
    return(
        <View style= {{width: "100%", height: height, backgroundColor: "#26282c", padding: "3%"}}>
        <View style= {{ marginTop: "6%", display: "flex", flexDirection: "row"}}>
            <Ionicons name='arrow-back' style= {{fontSize: 22, color: "#FDD130", paddingTop: "1.5%"}}></Ionicons>
            <Text style= {{color: "white", marginLeft: "2%", fontWeight: "600",fontSize: 20}}>Register</Text>
        </View>
        <View>
            <Image source={require('../images/logo.jpg')} style= {{width: 145, height: 45, display: "flex", justifyContent: "center", alignSelf: "center", marginTop: "14%"}}/>
            <Text style= {{color: "white", marginTop: "8%", display: "flex", justifyContent: "center", alignItems: "center", width: "95%", alignSelf: "center"}}>Sign up to discover all our movies and enjoy our features.</Text>
        </View>
        <TextInput
        mode=''
        label={"Email Addres"}
        right= {<TextInput.Icon icon="email-outline" color={"#FDD130"}/>}
        style= {{backgroundColor: "transparent", width: "95%",alignSelf: "center"}}>
        </TextInput>
        <TextInput
        mode=''
        label={"Password"}
        right= {<TextInput.Icon icon="lock-outline" color={"#FDD130"}/>}
        style= {{backgroundColor: "transparent", width: "95%",alignSelf: "center", }}>
        </TextInput>
        <TextInput
        mode=''
        label={"Confirm Password"}
        right= {<TextInput.Icon icon="lock-outline" color={"#FDD130"}/>}
        style= {{backgroundColor: "transparent", width: "95%",alignSelf: "center"}}>
        </TextInput>
        <TouchableOpacity onPress={()=>navigation.navigate("sign")} style= {{backgroundColor: "#FDD130", padding: 12, borderRadius: 3, alignSelf: "center", width: "95%", marginTop: "7%"}}>
        <Text style= {{textAlign: "center"}}>Sign Up</Text>
      </TouchableOpacity>
      <View style={{display: "flex", flexDirection: "row", width: "95%", alignSelf: "center", marginTop: "3%"}}>
      <Text style= {{color: "white"}}>By signing up I accept </Text>
      <Text style= {{color: "#FDD130"}}>terms of use </Text>
      <Text style= {{color: "white"}}>and </Text>
      <Text style= {{color: "#FDD130"}}>privacy policy </Text>
      </View>
      <Text style= {{color: "white", justifyContent: "center", textAlign: "center", marginTop: "4%"}}>or simply sign up with</Text>
      <TouchableOpacity style= {{backgroundColor: "black", padding: 12, borderRadius: 3, alignSelf: "center", width: "95%", marginTop: "7%", textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "center", gap: 7}}>
      <AntDesign name='apple1' style= {{color: "white"}}></AntDesign>
        <Text style= {{color: "white"}}>Sign Up with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style= {{backgroundColor: "white", padding: 12, borderRadius: 3, alignSelf: "center", width: "95%", marginTop: "3%", textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "center", gap: 7}}>
      <AntDesign name='google' style= {{color: "#FDD130"}}></AntDesign>
        <Text style= {{color: "black"}}>Sign Up with Google</Text>
      </TouchableOpacity>
      <View style= {{display: "flex", flexDirection: "row", width: "95%", justifyContent: "center", alignSelf: "center", marginTop: "7%"}}>
        <Text style= {{color: "white"}}>Already have an account?</Text>
        <Text onPress={()=>navigation.navigate("sign")} style= {{color: "#FDD130"}}> Sign In</Text>
      </View>
      <StatusBar style="light" />
      </View>
    )
}