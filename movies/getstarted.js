import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity} from 'react-native';
var image=require("../images/joker.jpg")
export default function GetStarted({navigation}) {
    return (
    <View>    
     <ImageBackground source={image} style={{width:"100%",height:"100%"}} resizeMode='cover'>
        
     <View  style={{backgroundColor:"rgba(0,0,0,0.7)",width:"100%", height:"100%"}}>
        <View style= {{display: "flex", justifyContent: "center", width: "100%", height: "94%", marginLeft: "5%"}}> 
      <Text style= {{color: "white", fontSize: 28, fontWeight: "bold", width: "80%"}}>Enjoy your favourite movie everywhere</Text>
      <Text style= {{color: "white", width: "80%", marginTop: "3%"}}>Browse through our collections and discover hundreds of movies and series that you'll love!</Text>
     </View>
     <TouchableOpacity onPress={()=>navigation.navigate("watch")} style= {{backgroundColor: "#FDD130", padding: 8, borderRadius: 2, alignSelf: "center", width: "90%"}}>
        <Text style= {{textAlign: "center"}}>Get Started</Text>
      </TouchableOpacity>
     </View>
     </ImageBackground>
     <StatusBar style="light" />
  </View>
    );
    
}