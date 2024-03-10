import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
const image = require("../images/logo.jpg");
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useState } from 'react';
import { GestureHandlerRootView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FIREBASE_APP } from '../firebaseConfiguration';
import { FIREBASE_AUTH } from '../firebaseConfiguration';
import { signInWithEmailAndPassword } from 'firebase/auth';


const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width
export default function SignIn({ navigation }) {

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validForm = () => {
    let valid = true;
    if (!email.trim()) {
      setEmailError('email is required');
      valid = false;

    } else if (!isValidEmail(email)) {
      setEmailError('email is invalid');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('password is required');
      valid = false
    } else {
      setPasswordError('');
    } return valid
  }
  //set data in local storage and checking the if the the validation form funciton is valid in order to be excuted
const auth=FIREBASE_AUTH;
  const handleSubmit = async() => {
    if (validForm() === true) {
      
      // const data = {
      //   email: email,
      //   password: password
      // }
      //  await AsyncStorage.setItem('key_vaue', JSON.stringify(data))
      try {
       await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate("Home")
        
      } catch (error) {
        console.log(error.code);
      }
    }
  }

  // const getData = async()=>{
  //   await AsyncStorage.getItem('key_value')
  //   console.log(data)
  // }
  return (
    <View style={{ width: "100%", height: height, backgroundColor: "#26282c", padding: "3%" }}>
      <View style={{ marginTop: "6%", display: "flex", flexDirection: "row" }}>
        <Ionicons onPress={() => navigation.navigate('watch')} name='arrow-back' style={{ fontSize: 22, color: "#FDD130", paddingTop: "1.5%" }}></Ionicons>
        <Text style={{ color: "white", marginLeft: "2%", fontWeight: "600", fontSize: 20 }}>Login</Text>
      </View>
      <View>
        <Image source={require('../images/logo.jpg')} style={{ width: 145, height: 45, display: "flex", justifyContent: "center", alignSelf: "center", marginTop: "14%" }} />
        <Text style={{ color: "white", marginTop: "8%", display: "flex", justifyContent: "center", alignItems: "center", width: "95%", alignSelf: "center" }}>Please Login to enjoy more benefits and we won't let You go.</Text>
      </View>
      <TextInput
        mode=''
        textColor='white'
        theme={{ colors: { primary: "#FDD130" } }}
        label={"Email Addres"}
        value={email}
        onChangeText={(e) => { setEmail(e) }}
        right={<TextInput.Icon icon="email-outline" color={"#FDD130"} />}
        style={{ backgroundColor: "transparent", width: "95%", alignSelf: "center" }}
      />
      {emailError ? <Text style={{color: 'red', paddingTop: 2}}>{emailError }</Text>: null } 

      <TextInput
        mode=''
        secureTextEntry={passwordVisible}
        theme={{ colors: { primary: "#FDD130" } }}
        textColor='white'
        label={"Password"}
        value={password}
        onChangeText={(p) => { setPassword(p) }}
        right={<TextInput.Icon icon={passwordVisible? 'eye-outline' : 'eye-off-outline'} color={"#FDD130"} onPress={()=>setPasswordVisible(!passwordVisible)}/>}
        
        style={{ backgroundColor: "transparent", width: "95%", alignSelf: "center", }}
      />
      {passwordError ? <Text style={{color: 'red', paddingTop: 2}}>{passwordError }</Text>: null } 
      <Text style={{ color: "#FDD130", justifyContent: "flex-end", display: "flex" }}>Forgot Password</Text>
      <TouchableOpacity onPress={()=>handleSubmit()}  style={{ backgroundColor: "#FDD130", padding: 12, borderRadius: 3, alignSelf: "center", width: "95%", marginTop: "7%" }}>
        <Text style={{ textAlign: "center" }}>Get Started</Text>
      </TouchableOpacity>
      <Text style={{ color: "white", justifyContent: "center", textAlign: "center", marginTop: "4%" }}>or simply sign in with</Text>
      <TouchableOpacity style={{ backgroundColor: "black", padding: 12, borderRadius: 3, alignSelf: "center", width: "95%", marginTop: "7%", textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "center", gap: 7 }}>
        <AntDesign name='apple1' style={{ color: "white" }}></AntDesign>
        <Text style={{ color: "white" }}>Login with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: "white", padding: 12, borderRadius: 3, alignSelf: "center", width: "95%", marginTop: "3%", textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "center", gap: 7 }}>
        <AntDesign name='google' style={{ color: "#FDD130" }}></AntDesign>
        <Text style={{ color: "black" }}>Login with Google</Text>
      </TouchableOpacity>
      <View style={{ display: "flex", flexDirection: "row", width: "95%", justifyContent: "center", alignSelf: "center", marginTop: "22%" }}>
        <TouchableOpacity>
          <Text style={{ color: "white" }}>Don't have an account?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("signup")}>
          <Text style={{ color: "#FDD130" }}> Sign Up</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  )
}