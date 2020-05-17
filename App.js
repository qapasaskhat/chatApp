import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    Image
 } from 'react-native';

 import {createAppContainer} from 'react-navigation'
 import {createStackNavigator} from 'react-navigation-stack'
 
 import LoginScreen from './screens/LoginScreen'
 import ChatScreen from './screens/ChatScreen'

 const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  Chat: ChatScreen
},{
  headerMode: "none"
})

const AppContainer = createAppContainer(AppNavigator);

export default class AppClass extends React.Component {   
    render() {
        return (
           <AppContainer />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
