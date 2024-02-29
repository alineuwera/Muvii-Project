import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

function Download({names}) {
    return(
        <TouchableOpacity style= {{}}>
            <Text style= {{color: "white", marginRight: 35, fontWeight: "bold", marginBottom: 18}}>{names}</Text>
        </TouchableOpacity>
    )
    
 }

 export default function Download1() {
    const item = [
        {
            id:1,
            title: "My List"
        },
        {
            id:2,
            title: "Downloaded"
        },
    ]
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style= {{marginTop: 22}}>
          {
            item.map((ele,index)=>{
                return(
                    <Download key={index} names={ele.title}/>
                )
            })
          }
        </ScrollView>
        )
     
    
 }