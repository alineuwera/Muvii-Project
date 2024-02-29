import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity} from 'react-native';
const image = require("../images/logo.jpg");
export default function WatchMovie({navigation}) {
    
    return(
        <View style= {{backgroundColor: "#26282c", width: "100%", height: "100%"}}>
        <View style= {{backgroundColor: "#1f2123", height: "12%"}}>
            <Image source= {image} style= {{width: 145, height: 45, display: "flex", justifyContent: "center", alignSelf: "center", marginTop: 30}}/>
        </View>
        <View style= {{ display:"flex", alignItems: "center", width:"100%",height: "43%",justifyContent:"center"}}>
            <Image source={require("../images/getStarted.jpg")} style= {{alignSelf: "center"}}/>
        </View>
        <View style= {{display:"flex",justifyContent: "center", alignItems: "center"}}>
        <Text style= {{color: "white", fontSize: 20, fontWeight: "bold"}}>Welcome to Muvi</Text>
        <Text style= {{color: "white",display: "flex", textAlign: "center", justifyContent: "center", width: "80%",marginTop: "3%"}}>Free movies streaming all your needs everytime and everywhere.</Text>
        </View>
        <View style= {{}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} style= {{backgroundColor: "#FDD130", padding: 8, borderRadius: 3, alignSelf: "center", width: "90%", marginTop: "38%"}}>
        <Text style= {{textAlign: "center"}}>Watch Movie</Text>
      </TouchableOpacity>
      <Text onPress={()=>navigation.navigate("sign")} style= {{color: "white", display: "flex", justifyContent: "center", textAlign: "center", marginTop: "5%"}}>SignIn</Text>
        </View>
        <StatusBar style="light" />
        </View>
    )
    
}