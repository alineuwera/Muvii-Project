import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions, ScrollView} from 'react-native';


function CardImg({image,rating}) {
    return(
      <ImageBackground source={{uri:image}} style= {{width: 185, height: 185, marginRight: 15}}>
        <View>
            <Text style= {{backgroundColor: "#fdd130", width: 23,display: "flex", alignSelf: "flex-end", margin: 10, textAlign: "center"}}>{rating}</Text>
        </View>
      </ImageBackground>
    )
    
 }
export default function MadeForYou() {
    const card = [
        {
            id: 1,
            image: "https://avatars.mds.yandex.net/i?id=b507a2b8d9382967a186c654f1eeaa74-5262078-images-taas-consumers&n=27&h=480&w=480",
            rating: 8.8

        },
        {
            id: 2,
            image: "https://avatars.mds.yandex.net/i?id=b507a2b8d9382967a186c654f1eeaa74-5262078-images-taas-consumers&n=27&h=480&w=480",
            rating: 1.8

        },
    ]
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style= {{marginTop: 22}}>
        {
          card.map((ele,index)=>{
              return(
                  <CardImg key={index} image={ele.image} rating={ele.rating}/>
              )
          })
        }
      </ScrollView>
    )
    
}