import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions} from 'react-native';
import { TextInput } from 'react-native-paper';
const image = require("../images/logo.jpg");
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FIREBASE_APP } from '../firebaseConfiguration';
import { FIREBASE_AUTH } from '../firebaseConfiguration';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width
export default function Registers({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  
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
    } 
    if(password !== confirmPassword){
      setConfirmPasswordError("password doesn't match");
      valid = false;
    }else{
      setConfirmPasswordError('');
    }return valid
  }

  
  //set data in local storage and checking the if the the validation form funciton is valid in order to be excuted
const auth=FIREBASE_AUTH;
  const handleSubmit = async() => {
    if (validForm() === true) {
      navigation.navigate("sign")
      // const data = {
      //   email: email,
      //   password: password
      // }
      //  await AsyncStorage.setItem('key_vaue', JSON.stringify(data))
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        console.log('created user successfully');
        
      } catch (error) {
        console.log(error);
        
      }finally{
        navigation.navigate('sign');
      }
    }
  }



    return(
        <View style= {{width: "100%", height: height, backgroundColor: "#26282c", padding: "3%"}}>
        <View style= {{ marginTop: "6%", display: "flex", flexDirection: "row"}}>
            <Ionicons onPress={()=>navigation.navigate("sign")} name='arrow-back' style= {{fontSize: 22, color: "#FDD130", paddingTop: "1.5%"}}></Ionicons>
            <Text style= {{color: "white", marginLeft: "2%", fontWeight: "600",fontSize: 20}}>Register</Text>
        </View>
        <View>
            <Image source={require('../images/logo.jpg')} style= {{width: 145, height: 45, display: "flex", justifyContent: "center", alignSelf: "center", marginTop: "14%"}}/>
            <Text style= {{color: "white", marginTop: "8%", display: "flex", justifyContent: "center", alignItems: "center", width: "95%", alignSelf: "center"}}>Sign up to discover all our movies and enjoy our features.</Text>
        </View>
        <TextInput
        mode=''
        textColor='white'
        theme={{ colors: { primary: "#FDD130" } }}
        label={"Email Addres"}
        onChangeText={(e) => { setEmail(e) }}
        right= {<TextInput.Icon icon="email-outline" color={"#FDD130"}/>}
        style= {{backgroundColor: "transparent", width: "95%",alignSelf: "center"}}
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
        {passwordError? <Text style={{color: 'red', paddingTop: 2}}>{passwordError }</Text>: null }
        <TextInput
        mode=''
        secureTextEntry={passwordVisible}
        theme={{ colors: { primary: "#FDD130" } }}
        textColor='white'
        label={"Password"}
        value={confirmPassword}
        onChangeText={(cp) => { setConfirmPassword(cp) }}
        right={<TextInput.Icon icon={passwordVisible? 'eye-outline' : 'eye-off-outline'} color={"#FDD130"} onPress={()=>setPasswordVisible(!passwordVisible)}/>}
        
        style={{ backgroundColor: "transparent", width: "95%", alignSelf: "center", }}
      />
        {confirmPasswordError ? <Text style={{color: 'red', paddingTop: 2}}>{confirmPasswordError }</Text>: null }
        <TouchableOpacity onPress={()=>handleSubmit()} style= {{backgroundColor: "#FDD130", padding: 12, borderRadius: 3, alignSelf: "center", width: "95%", marginTop: "7%"}}>
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