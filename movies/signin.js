import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions} from 'react-native';
import { TextInput } from 'react-native-paper';
const image = require("../images/logo.jpg");
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign"
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width
export default function SignIn({navigation}) {
    return(
        <View style= {{width: "100%", height: height, backgroundColor: "#26282c", padding: "3%"}}>
        <View style= {{ marginTop: "6%", display: "flex", flexDirection: "row"}}>
            <Ionicons name='arrow-back' style= {{fontSize: 22, color: "#FDD130", paddingTop: "1.5%"}}></Ionicons>
            <Text style= {{color: "white", marginLeft: "2%", fontWeight: "600",fontSize: 20}}>Login</Text>
        </View>
        <View>
            <Image source={require('../images/logo.jpg')} style= {{width: 145, height: 45, display: "flex", justifyContent: "center", alignSelf: "center", marginTop: "14%"}}/>
            <Text style= {{color: "white", marginTop: "8%", display: "flex", justifyContent: "center", alignItems: "center", width: "95%", alignSelf: "center"}}>Please Login to enjoy more benefits and we won't let You go.</Text>
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
        <Text style= {{color: "#FDD130", justifyContent: "flex-end", display: "flex"}}>Forgot Password</Text>
        <TouchableOpacity  onPress={()=>navigation.navigate("Home")} style= {{backgroundColor: "#FDD130", padding: 12, borderRadius: 3, alignSelf: "center", width: "95%", marginTop: "7%"}}>
        <Text style= {{textAlign: "center"}}>Get Started</Text>
      </TouchableOpacity>
      <Text style= {{color: "white", justifyContent: "center", textAlign: "center", marginTop: "4%"}}>or simply sign in with</Text>
      <TouchableOpacity style= {{backgroundColor: "black", padding: 12, borderRadius: 3, alignSelf: "center", width: "95%", marginTop: "7%", textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "center", gap: 7}}>
      <AntDesign name='apple1' style= {{color: "white"}}></AntDesign>
        <Text style= {{color: "white"}}>Login with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style= {{backgroundColor: "white", padding: 12, borderRadius: 3, alignSelf: "center", width: "95%", marginTop: "3%", textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "center", gap: 7}}>
      <AntDesign name='google' style= {{color: "#FDD130"}}></AntDesign>
        <Text style= {{color: "black"}}>Login with Google</Text>
      </TouchableOpacity>
      <View style= {{display: "flex", flexDirection: "row", width: "95%", justifyContent: "center", alignSelf: "center", marginTop: "22%"}}>
        <Text style= {{color: "white"}}>Don't have an account?</Text>
        <Text onPress={()=>navigation.navigate("signup")} style= {{color: "#FDD130"}}> Sign Up</Text>
      </View>
      <StatusBar style="light" />
      </View>
    )
}