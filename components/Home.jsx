import React,{useState,useEffect} from 'react';
import { Text, Button, View, Image, LogBox } from 'react-native';
import styles from "../styles/main";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home =(props) => {

  //to set the value on Text

  const [getValueName,setGetName]= useState("");
  const[getValueCity,setGetCity]= useState("");

  const getData = async ()=> {
    //function to get the value from AsyncStorage 

    AsyncStorage.getItem("name").then(
      (value) => 
      //AsyncStorage returns a promise,so adding a callback to get the value 
      setGetName(value)
      //Seting the value in text
    );
    AsyncStorage.getItem("city").then(
      (value) => 
      //AsyncStorage returns a promise,so adding a callback to get the value 
      setGetCity(value)
      //Seting the value in text
    );
  };
  useEffect(()=> {
    getData();
  }, []);
        return(
            <View style= {styles.container}>

          <Text style={styles.header}>
            Hi {getValueName} from {getValueCity}
          </Text>
          <View style= {styles.container}>

<Image style={styles.img_logo} source={require('../assets/logo.png')}/>
            </View>
            </View>
        );
        };

export default Home;