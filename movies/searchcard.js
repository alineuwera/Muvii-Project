import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

function SearchCard({name,release_date,image}) {
    return(
        <View style= {{display:"flex", flexDirection:"row",margin:8, width:"100%"}}>
            <View style={{width:"50%"}}>
            <ImageBackground source={{uri:`https://image.tmdb.org/t/p/w500${image}`}} style= {{width: 165, height: 105, marginRight: 15}}>
             </ImageBackground>
             </View>
             <View style={{width:"50%"}}>
            <Text style= {{color: "white", marginRight: 35, fontWeight: "bold", marginBottom: 8}}>{name}</Text>
            <Text style= {{color: "white", marginRight: 35,marginBottom: 8}}>{release_date}</Text>
            </View>
        </View>
    )
    
 }
 export default function CardsSearch({movieSearch,navigation}){
   
    // const item = [
    //     {
    //         id: 1,
    //         title: "cartoon",
    //         year: "2020",
    //     },
    //     {
    //         id: 2,
    //         title: "Series",
    //         year: "2021"
    //     },
    //     {
    //         id: 3,
    //         title: "Films",
    //         year: "2023"
    //     },
    //     {
    //         id: 4,
    //         title: "love",
    //         year: "2000"
    //     },
    // ]
    return(
    <ScrollView style= {{}}>
      {
        movieSearch.map((ele,index)=>{
            return(
              <TouchableOpacity onPress={()=>navigation.navigate('action', ele)}>
                <SearchCard key={index} name={ele.title} image={ele.poster_path} release_date={ele.release_date}/>
                </TouchableOpacity>  
            )
        })
      }
    </ScrollView>
    )
  }

