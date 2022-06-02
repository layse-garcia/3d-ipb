import React from 'react';
import { StyleSheet, Text, Button, View, Image, LogBox, TextInput } from 'react-native';
import styles from "../styles/main";

const Contacts =(props) => {
        return(
            <View style= {styles.layer2}>
          <Text style ={styles.header}>Contact Form</Text>  
          <TextInput
          placeholder={'Name'}
          style={styles.input}
          />
           <TextInput
          placeholder={'Email'}
          style={styles.input}
          />
           <TextInput
          placeholder={'Message'}
          style={styles.input_large}
          />
<Button 
title={'Submit'}
style={styles.input}
/>
            </View>
        );
        }

export default Contacts;