                     
import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {Text, Button, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Import Library Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from "./styles/main";

// Custom Components
import PostsComponent from './components/Posts';
import PostComponent from './components/Post';
import CommentsComponent from './components/Comments';
import HomeComponent from './components/Home';
import ProfileComponent from './components/Profile';
import ContactsComponent from './components/Contacts';

import SignInComponent from './components/SignIn';
import SettingsComponent from './components/Settings';
import { AuthContext } from './context/AuthContext';

// Screen Methods
function HomeScreen({ navigation, route }) {
  return (
    <HomeComponent navigation={navigation} route={route} />
  );
}

function PostsScreen({ navigation, route }) {
  return (
    <PostsComponent navigation={navigation} route={route} />
  );
}

function PostScreen({ navigation, route }) {
  return (
    <PostComponent navigation={navigation} route={route} />
  );
}

function CommentsScreen({ navigation,route }) {
  return (
    <CommentsComponent navigation={navigation} route = {route} />
  );
}

function ProfileScreen({ navigation }) {
  return (
    <ProfileComponent navigation={navigation} />
  );
}

function ContactsScreen({ navigation }) {
  return (
    <ContactsComponent navigation={navigation} />
  );
}

function SignInScreen({ navigation }) {
  return (
    <SignInComponent navigation={navigation} />
  );
}

function SettingsScreen({ navigation }) {
  return (
    <SettingsComponent navigation={navigation} />
  );
}

// Blog Stack Navigation
const StackAuth = createStackNavigator();
function NavAuth(logged) {

  return (
    <StackAuth.Navigator
      initialRouteName={logged ? "App" : "SignIn"} // Set Initial screen
      headerMode="none" // Hide top nav bar
      screenOptions={{
        headerStyle: styles.headerBG,
        headerTintColor: '#eee',
        headerTitleStyle: styles.headerBold
      }}
    >
      <StackAuth.Screen name="SignIn" component={SignInScreen} />
      <StackAuth.Screen name="App" component={NavTab} />
    </StackAuth.Navigator>
  );
}

// App Tab Navigation
const Tab = createBottomTabNavigator();
function NavTab(props) {
  const { user } = props.route.params;

  return (
    <AuthContext.Provider value={user}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') { iconName = 'ios-home'; }
            else if (route.name === 'Posts') { iconName = 'md-list'; }
            else if (route.name === 'Profile') { iconName = 'ios-person'; }
            else if (route.name === 'Contacts') { iconName = 'ios-send'; }
            else if (route.name === 'Settings') { iconName = 'settings'; }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{ activeTintColor: 'steelblue', inactiveTintColor: 'gray' }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Posts" component={NavBlog} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </AuthContext.Provider>
  );
}

// Blog Stack Navigation
const Stack = createStackNavigator();
function NavBlog() {
  return(
    <Stack.Navigator screenOptions={{
        headerStyle: styles.headerBG, 
        headerTintColor:'#eee',
        headerTitleStyle: styles.headerBold
      }}>
    
      <Stack.Screen name="Home" component={PostsScreen} options={{title:'Blog'}} />
  
          <Stack.Screen name="Post" component={PostScreen} />
          <Stack.Screen name="Comments" component={CommentsScreen}/> 
           </Stack.Navigator>
           );
  }
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <NavigationContainer style={styles.container} >
        { NavAuth(this.context.isLogged)}
      </NavigationContainer>
    );
  }
}
App.contextType = AuthContext;

export default App;