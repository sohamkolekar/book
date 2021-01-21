import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './appTabNavigator';
import Menu from './CustomSideBarMenu';
import Setting from '../screens/SettingScreen'

export const AppDrawerNavigator =createDrawerNavigator(
    {
        Home:{
            screen:AppTabNavigator
        },
        Setting:{
            screen:Setting
        }
    },

    {
        contentComponent:Menu
    },
    
    {
        initialRouteName:'Home'
    }
)


