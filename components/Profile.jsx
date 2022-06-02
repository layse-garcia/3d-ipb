import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

// https://www.kindacode.com/article/how-to-set-a-gradient-background-in-react-native/
// expo install expo-linear-gradient
import { LinearGradient } from 'expo-linear-gradient';

// https://www.geeksforgeeks.org/how-to-add-searchbar-in-react-native/
// npm install --global expo-cli

//npm i react-native-picker-select
import RNPickerSelect from "react-native-picker-select";

import { Posts } from './Posts';

import Brand from "../assets/img/logo.png";


// https://reactnavigation.org/docs/tab-based-navigation/
//https://reactnavigation.org/docs/drawer-based-navigation/


export const Profile = () => {
  return (
    <View>
      <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
        <LinearGradient 
          colors={['rgba(69,203,178,0.2)', 'rgba(69,203,178,1)']} 
          start={{
            x: 0,
            y: 350
          }}
          end={{
            x: 1,
            y: 1
          }} 
          style={styles.box}>
          
          <Image source={Brand} style={styles.logo} />
          <Text style={styles.user_name}>Utilizador</Text>
        
          <Button
                title="Adicionar Projeto 3D"
                color="rgba(69,203,178,1)"
                accessibilityLabel="Adicionar Projeto 3D"
                style={styles.button_3d}
          />
          <Button
                title="Editar Perfil"
                color="rgba(69,203,178,1)"
                accessibilityLabel="Editar Perfil"
                style={styles.button_edit}
          />
        </LinearGradient>
        <Text style={styles.title_comunity}>Descrição</Text>
        <Text style={styles.about}>Lorem ipsum ipsum lorem lorem</Text>
        <Text style={styles.title_comunity}>My 3Ds</Text>
        <Posts/>
      </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1.5
  },
  container:{
    textAlign: 'center',
    marginBottom: 20,
    width: '100%',
  },
  logo: {
    width: 50,
    textAlign: 'center',
    position: 'relative',
    marginLeft: '10%',
    marginRight: '10%',
  },
  search: {
    position: 'relative',
    borderWidth: 1,
    borderRadius: 21,
    fontSize: 14,
    width: 313,
    height: 43,
    backgroundColor: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    
  },
  select_input: {
    position: 'relative',
    borderWidth: 1,
    borderRadius: 21,
    fontSize: 14,
    width: 313,
    height: 43,
    backgroundColor: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  user_name:  {
    position: 'relative',
    textAlign: 'center',
    width: 88,
    height: 22,
    font: 'Montserrat',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 22,
    color: '#2C2C2C',
    marginTop: 80,
  },
  description:{
    position: 'relative',
    width: 315,
    height: 25,
    font: 'Montserrat',
    fontWeight: 300,
    fontSize: 16,
    lineHeight: 25,
    color: '#2C2C2C',
    marginTop: 60,
  },
  title_comunity:{
    marginTop: 10,
    font: 'Montserrat',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 22,
    color: '#2C2C2C',
  },
  about:{
        marginTop: 10,
        font: 'Montserrat',
        fontWeight: 300,
        fontSize: 16,
        lineHeight: 25,
        color: '#2C2C2C',
        },
button_3d: {
        alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
}
});
