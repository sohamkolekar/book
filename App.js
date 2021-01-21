import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/appTabNavigator'
import { AppDrawerNavigator } from './components/AppDrawerNavigator';


export default function App() {
  return (

    <AppContainer/>
    
  );
}

const SwitchNavigator=createSwitchNavigator({
  
  DrawerTab:{screen:AppDrawerNavigator},
  Welcome:{screen:WelcomeScreen}
 
})

const AppContainer=createAppContainer(SwitchNavigator)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
