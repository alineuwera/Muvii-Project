import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

function Search1({searchName, }) {
    return(
        <TouchableOpacity>
            <Text style= {{color: "white", marginRight: 35, fontWeight: "bold", marginBottom: 18, paddingLeft:13}}>{searchName}</Text>
        </TouchableOpacity>
    )
    
 }
 export default function Search({navigation}){
    const item = [
        {
            id: 1,
            title: "All Result"
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
        <TouchableOpacity onPress={()=>navigation.navigate('action', item)}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style= {{marginTop: 22}}>
      {
        item.map((ele,index)=>{
            return(
                <Search1 key={index} searchName={ele.title}/>
            )
        })
      }
    </ScrollView>
    </TouchableOpacity>
    )
 }

