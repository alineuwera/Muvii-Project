import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
const image = require("../images/logo.jpg");
import Download from './download1';
import Download1 from './download1';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Downloaded({navigation}) {
    return(
        <View style= {{width: "100%", height: "100%", backgroundColor: "#26282c"}}>
            <View style= {{backgroundColor: "#1f2123", padding:11}}>
          <View>
          <Image source={require('../images/logo.jpg')} style= {{width: 145, height: 45 , marginTop: "10%"}}/>
          </View>
          <View>
            <Download1/>
          </View>
          </View>
          <View style= {{display: "flex", flexDirection: "row", marginTop: 20, marginLeft: 18}}>
          <Image source={require("../images/dow1.jpg")} style= {{width:185,height: 100}}/>
          <View style= {{display: "flex", flexDirection: "column", marginLeft: 10}}>
          <Text style= {{color: "white"}}></Text>
          <Text style= {{color: "white", fontWeight: 300}}>2020</Text>
          <Text style= {{color: "white", fontWeight: 100}}>Drama, Kid, Family</Text>
          </View>
          </View>
          <View style= {{display: "flex", flexDirection: "row", marginTop: 20, marginLeft: 18}}>
          <Image source={require("../images/dow2.jpg")} style= {{width:185,height: 100}}/>
          <View style= {{display: "flex", flexDirection: "column", marginLeft: 10}}>
          <Text style= {{color: "white"}}>Ip Man 4</Text>
          <Text style= {{color: "white", fontWeight: 300}}>2019</Text>
          <Text style= {{color: "white", fontWeight: 100}}>Action, Fighting, Drama</Text>
          </View>
          </View>
          <View style= {{display: "flex", flexDirection: "row", marginTop: 20, marginLeft: 18}}>
          <Image source={require("../images/dow3.jpeg")} style= {{width:185,height: 100}}/>
          <View style= {{display: "flex", flexDirection: "column", marginLeft: 10}}>
          <Text style= {{color: "white"}}>Man of steel</Text>
          <Text style= {{color: "white", fontWeight: 300}}>2018</Text>
          <Text style= {{color: "white", fontWeight: 100}}>Action, Family, Fighting</Text>
          </View>
          </View>
          <StatusBar style="light" />
        </View>
    )
    
}