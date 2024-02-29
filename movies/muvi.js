import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
const image = require("../images/logo.jpg");
export default function Muvii({navigation}) {
     useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("start")
        },3000);
     })
    
    return(
        <View style={styles.container}>
           <Image source= {image} style= {{width: 155, height: 55}}/>
           <StatusBar style="light" />
         </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1f2123',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });