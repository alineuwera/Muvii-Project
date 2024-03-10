import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Cards from './card1';
import CardButton from './card2';
import CardsImage from './cards';
import MadeForYou from './madeforyou';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import React from 'react'
const image = require("../images/logo.jpg");

export default function Home({navigation}) {
    const [movies, setMovies] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [top, topMovies] = useState([])
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDMxOWFlYWZlN2RmNzlhYTVjNTc3ZGZjNWQ3YWMxNSIsInN1YiI6IjY1ZGNiMWJhMDc1Mjg4MDE3ZGI0MzcwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fgix6MQHhVGwsraF-HXjM_lkbZWpSwi0c--HNLLVw-M'
        }
      };
      

const fetchMovies = () =>  {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US?api_key=bd319aeafe7df79aa5c577dfc5d7ac15', options)
  .then((response)=> response.json())
    .then(response => setMovies(response.results))
    .catch(err => console.error(err));

    console.log(movies);

      
      fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setUpcoming(response.results))
        .catch(err => console.error(err));


          
          fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => topMovies(response.results))
            .catch(err => console.error(err));

 }

   useEffect(()=>{
    fetchMovies()
   },[])   
     

    return(
        <View style= {{width: "100%", height: "100%", backgroundColor: "#26282c"}}>
            <View style= {{backgroundColor: "#1f2123", padding:11}}>
            <View style= {{display: "flex", flexDirection: "row",justifyContent:"space-between", marginTop: "4%"}}>
            <Image source={require('../images/logo.jpg')} style= {{width: 145, height: 45 , marginTop: "10%"}}/>
            <View style= {{display: "flex", flexDirection: "row",alignSelf: "center", justifyContent: "center", gap: 12}}> 
            <Feather name='bookmark' style= {{color:"white", fontWeight: "bold", fontSize: 20}}></Feather>
            <EvilIcons name='bell' style= {{color:"white", fontWeight: "bold", fontSize: 30}}></EvilIcons>
            </View>
        </View>
       <View>
        <Cards />
       </View>
       </View>

      
       <View style= {{padding:11}}>
        <CardButton/>
       </View>
       
        {/* fetch images */}
       <ScrollView>
        <View style= {{padding:11}}>
            <Text style= {{color: "white", fontWeight: "bold", fontSize: 20}}>New Release</Text>
        </View>
        <View style= {{padding:11}}>
            <CardsImage images={movies}/>   
        </View>


        <View style= {{padding:11}}>
            <Text style= {{color: "white", fontWeight: "bold", fontSize: 20}}>Made for you</Text>
        </View>
        
        <View style= {{padding:11}}>
            <CardsImage images={upcoming}/>
        </View>

        <View style= {{padding:11}}>
            <Text style= {{color: "white", fontWeight: "bold", fontSize: 20}}>Top Movies</Text>
        </View>
           <View>
           <CardsImage images={top}/>
           </View>
        </ScrollView>
        <StatusBar style="light" />
        </View>
    )
    
}