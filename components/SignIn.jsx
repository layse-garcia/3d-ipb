import React, {Component } from "react";
import {StyleSheet,View, TextInput,Text ,Button} from "react-native";
import styles from "../styles/main";

//List of users
//Load from the api on the future


const userList =[
    {
        id:1,
        username: "sj",
        password:"sj",
        name:"Steve Jobs",
        description:"Steve Jobs was born in 1955 and raised by adoptive parents in Cupertino, California. Though he was interested in engineering, his passions as a youth varied.",
        email:"stevejobs@apple.com",
        number:"800-692-7753",
        avatar:require("../assets/users/sj.png"),
},
{
        id:2,
        username: "bg",
        password:"bg",
        name:"Bill Gates",
        description:"Bill Gates was the founder of Microsoft....",
        email:"billgates@microsoft.com",
        number:"XYZ-145-502",
        avatar:require("../assets/users/bg.png"),
},
];

class SignIn extends Component {
    constructor (props){
        super(props);

        this.state = {
            username : "",
            password : "",
        };
    }


//Update state key with value 

setStateFor = (key,val) => {
    this.setState({
        [key]: val
    });
};

//Verify existing user credentials
verifyUser = () => {
    //find matching user 
    const user = userList.find(x=> 
        x.username === this.state.username &&
        x.password === this.state.password
        );
        if (user !== undefined){
//when the username and password matches to a known user
// We send all the user data to the navigation screen
// So then this method can catch the user object in
// Props and update the context provider with this info 
            this.props.navigation.navigate("App",{user:user});
        }
    else{
        console.log("Invalid user");
    }
}

 render () {
     return (
         <View style={styles.layer2}  >
         <Text style={styles.header}>Sign In</Text>
         <TextInput
         placeholder="Username"
         style={styles.input}
         onChangeText={(value) => this.setStateFor("username",value)}
         />
          <TextInput
         placeholder="Password"
         style={styles.input}
         onChangeText={(value) => this.setStateFor("password",value)}
         secureTextEntry
         />
         <Button
         title="Sign in"
         style={styles.input}
         onPress={this.verifyUser}
         />
    </View>  
    );
     }
 }
 export default SignIn;