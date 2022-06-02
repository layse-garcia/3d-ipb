import { Assets } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, Button, View, Image, LogBox } from 'react-native';

import {AuthContext} from "../context/AuthContext";


const Profile =(props) => {
        return(
          <AuthContext.Consumer>
            {(user) => (

            <View style= {styles.main}>
            <View style= {styles.layer1}>
<Image 
style={styles.img} 
source={user.avatar}/>
            </View>

   <View style= {styles.layer2}>          
   <Text style= {styles.header}>{user.name}</Text> 
   <Text style= {styles.body}>{user.description} </Text> 
            </View>
            <View style= {styles.layer3}> 
            <View style= {styles.layer4}> 
            <Text style= {styles.footer}>{user.number} </Text> 
</View>
<View style= {styles.layer5}> 
            <Text style= {styles.footer}>{user.email} </Text>
            </View>
           </View>
    </View>
            )}
            </AuthContext.Consumer>
        );
        }

export default Profile;

const styles = StyleSheet.create({
    main: {
      flex: 1,
      flexDirection:'column',
      marginTop:50
    },
    img:{
      width:200,
      height:200,
      borderRadius:100,
      backgroundColor:'#eee'

    },
    layer1: {
      flex: 4,
      alignItems:'center',
     padding:20
    },
    layer2:{
      flex:4,
      justifyContent:'center',
      alignItems:'center',
      padding:20,
      backgroundColor:'powderblue'
    },
    header:{
      fontSize:30,
      fontWeight:'bold',
      marginBottom:40,
      marginTop:40
    },
    body:{
      textAlign:'justify'
    },
    layer3:{
      flex:1,
      flexDirection:'row'
    },
    layer4:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#21618C'
    },
    layer5:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'steelblue'
    },
    footer:{
      fontSize:16,
      fontWeight:'bold',
      color:"#fff"
    }
  });