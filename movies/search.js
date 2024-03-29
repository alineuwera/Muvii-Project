import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Pressable, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from './search1';
import React, { useEffect, useState } from 'react';
import CardsSearch from './searchcard';



export default function SearchItem({ navigation }) {

  const [searchData, setData] = useState([]);
  const [inputData, setInput] = useState('');
  const [searchActive, setActive] = useState(false);


  function handleSearch() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDMxOWFlYWZlN2RmNzlhYTVjNTc3ZGZjNWQ3YWMxNSIsInN1YiI6IjY1ZGNiMWJhMDc1Mjg4MDE3ZGI0MzcwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fgix6MQHhVGwsraF-HXjM_lkbZWpSwi0c--HNLLVw-M'
      }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${inputData}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => {
        setData(response.results)

        console.log(searchData);
      })
      .catch(err => console.error(err));
    // console.log();

//se=========================


  }
  useEffect(() => {
    if (inputData.length < 0) {
      setData([]);
      
    } else {
      handleSearch()
      

      
    }
  }, [inputData])
  return (

    <View style={{ width: "100%", height: "100%", backgroundColor: "#26282c" }}>
      <View style={{ backgroundColor: "#1f2123" }}>
        <TextInput
          onChangeText={(e) => {
            setInput(e)
            if(e===''){
              setActive(false)
            }else{
              setActive(true)
            }
          }}
          mode=''
          textColor='white'
          theme={{ colors: { primary: "#FDD130" } }}
          label={"Search Movie Title"}
          right={<TextInput.Icon icon="magnify" color={"#FDD130"} />}
          style={{ backgroundColor: "transparent", width: "95%", alignSelf: "center", marginTop: 22, color: "white" }}>
        </TextInput>
        <Search />

      </View>
      <View style={{width:'100%',height:'80%'}}>
        {searchActive?(
                      <View>
                      <CardsSearch movieSearch={searchData} navigation={navigation}/>
                    </View>

        ):(
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>

          <View style={{ display: "flex", alignItems: "center", width: "100%", height: "35%", justifyContent: "center" }}>
            <Image source={require("../images/search.png")} style={{ alignSelf: "center", width: 180, height: 150 }} />
          </View>
          <View>
            <Text style={{ color: "white", display: "flex", justifyContent: "center", alignSelf: "center", fontSize: 20, fontWeight: "bold" }}>Find your Movie</Text>
            <Text style={{ color: "white", display: "flex", justifyContent: "center", alignSelf: "center", fontWeight: 300, marginTop: 6 }}>Search Movie,Series, Original, as you like</Text>
          </View>
        </View>

          )}
      </View>


      <StatusBar style="light" />
    </View>

  )



}


