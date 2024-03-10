import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { useEffect, useState } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import ImagesCards from './actionCard';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useRoute} from "@react-navigation/native";
export default function Action({ navigation, route }) {
  
  const [buttonPlay, setButtonPlay] = useState(false)
  const [play, setPlayMovies] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [videos, setVideos] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDMxOWFlYWZlN2RmNzlhYTVjNTc3ZGZjNWQ3YWMxNSIsInN1YiI6IjY1ZGNiMWJhMDc1Mjg4MDE3ZGI0MzcwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fgix6MQHhVGwsraF-HXjM_lkbZWpSwi0c--HNLLVw-M'
    }
  };
const result=useRoute()
  useEffect(() => {
    

    fetch(`https://api.themoviedb.org/3/movie/${result.params.id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setVideos(response.results[0].key))

      .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(respons => respons.json())
      .then(respons => setPlayMovies(respons.results))
      .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(res => res.json())
      .then(res => setUpcoming(res.results))
      .catch(err => console.error(err));

    console.log(route)
  }, [])




  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#26282c", padding: "3%" }}>
      <View style={{ marginTop: "6%", display: "flex", flexDirection: "row" }}>
        <Ionicons onPress={() => navigation.navigate('search')} name='arrow-back' style={{ fontSize: 22, color: "#FDD130", paddingTop: "1.5%" }}></Ionicons>
        <Text style={{ color: "white", marginLeft: "2%", fontWeight: "600", fontSize: 20 }}>Action</Text>
      </View>
      <View style={{}}>
        {
          !buttonPlay ? (
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${route.params.poster_path}` }} style={{ width: 361, height: 175, marginTop: "14%" }} />
          ) : (
            <YoutubePlayer
              videoId={videos}
              height={200}
            />
          )

        }
        {/* <Image source={{uri:`https://image.tmdb.org/t/p/w500${route.params.poster_path}` }} style={{ width: 361, height: 175, marginTop: "14%" }} /> */}

      </View>
      <View>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", margin: 10 }}>{route.params.title}</Text>
        <Text style={{ color: "white", fontWeight: '200', width: "85%" }}>{route.params.overview}</Text>
      </View>
      <View style={{ width: "100%", display: "flex", flexDirection: "row", gap: 12, marginTop: 15 }}>
        <TouchableOpacity onPress={() => setButtonPlay(true)} style={{ backgroundColor: "#FDD130", width: "48%", display: "flex", flexDirection: "row", borderRadius: 2 }}>
          <Feather name='play' style={{ marginLeft: 35, justifyContent: "center", alignSelf: "center" }}></Feather>
          <Text style={{ padding: 7 }}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "48%", display: "flex", flexDirection: "row", borderColor: "gray", borderWidth: 1, borderRadius: 2 }}>
          <AntDesign name='plus' style={{ marginLeft: 35, justifyContent: "center", alignSelf: "center", color: "#FDD130" }}></AntDesign>
          <Text style={{ padding: 7, color: "white" }}>My List</Text>
        </TouchableOpacity>
      </View>

      {/* fetch images */}
      <ScrollView>
        <View style={{ marginTop: 12 }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>U.S Action Movies</Text>
        </View>
        <View>
          <ImagesCards imagesCard={play} navigation={navigation} />
        </View>
        <View style={{ marginTop: 12 }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Muvi Originals Action</Text>
        </View>
        <View>
          <ImagesCards imagesCard={upcoming} navigation={navigation} />
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  )

}