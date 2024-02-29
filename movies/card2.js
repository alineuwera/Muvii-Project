import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

function Card({name}) {
    return(
        <TouchableOpacity style= {{}}>
            <Text style= {{color: "white", marginRight: 35, fontWeight: "400", borderWidth: 1, padding: 6, borderColor: "gray", borderRadius: 5}}>{name}</Text>
        </TouchableOpacity>
    )
    
 }
 export default function CardButton(){
    const item = [
        {
            id: 1,
            title: "Popular Today"
        },
        {
            id: 2,
            title: "Manuel"
        },
        {
            id: 3,
            title: "Fans Choice"
        },
        {
            id: 4,
            title: "Stars"
        },
        {
            id: 5,
            title: "Your choice"
        },
        {
            id: 6,
            title: "Best"
        }
    ]
    return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style= {{marginTop: 22}}>
      {
        item.map((ele,index)=>{
            return(
                <Card key={index} name={ele.title}/>
            )
        })
      }
    </ScrollView>
    )
 }

