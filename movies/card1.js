import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

function Card1({name}) {
    return(
        <TouchableOpacity style= {{}}>
            <Text style= {{color: "white", marginRight: 35, fontWeight: "bold", marginBottom: 18}}>{name}</Text>
        </TouchableOpacity>
    )
    
 }
 export default function Cards(){
    const item = [
        {
            id: 1,
            title: "Featured"
        },
        {
            id: 2,
            title: "Series"
        },
        {
            id: 3,
            title: "Films"
        },
        {
            id: 4,
            title: "Original"
        },
        {
            id: 5,
            title: "Music"
        },
        {
            id: 6,
            title: "Entertainment"
        }
    ]
    return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style= {{marginTop: 22}}>
      {
        item.map((ele,index)=>{
            return(
                <Card1 key={index} name={ele.title}/>
            )
        })
      }
    </ScrollView>
    )
 }

