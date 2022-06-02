import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, Image, LogBox, TextInput } from 'react-native';
import styles from "../styles/main";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigationBuilder } from '@react-navigation/core';

const Settings =({navigation}) => {

    //To get the value from TextInput

    const [textInputName, setTextInputName]= useState("");
    const [textInputCity, setTextInputCity]= useState("");

        const storeData = async () => {
                //function to save the value in AsyncStorage
                if(textInputName && textInputCity){
                    //To check the input is not empty
                
                AsyncStorage.setItem("name",textInputName);
                AsyncStorage.setItem("city",textInputCity); 
                    alert("Settings Saved!");
                    navigation.navigate("Home");
                    //alert to confirm , and move to Home screen
                }else {
                    alert("Please fill the data");
                    //alert for the empty Input Text
                }
        };


        return(
            <View style= {styles.container}>
          <Text style ={styles.header}>Settings</Text>  
          <TextInput
          placeholder={'Name'}
          value={textInputName}
          onChangeText={(data)=> setTextInputName(data)}
          style={styles.input}
          />
           <TextInput
          placeholder={'City'}
          value={textInputCity}
          onChangeText={(data)=> setTextInputCity(data)}
          style={styles.input}
          />
<Button 
title={'Save'}
onPress={storeData}
style={styles.input}
/>
            </View>
        );
        };

export default Settings;