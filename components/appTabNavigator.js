import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Image} from 'react-native'
import Donate from '../screens/BookDonate'
import Request from '../screens/BookRequests'

export const AppTabNavigator=createBottomTabNavigator({
    DonateScreen:{screen:Donate,
        navigationOptions:{
            tabBarIcon:
            <Image
            source={require('../assets/request-list.png')}
            style={{width:50,height:50}}/>,
            
            tabBarLabel:"DonateBooks"
        }
    },
    RequestScreen:{screen:Request,
        navigationOptions:{
            tabBarIcon:
            <Image
            source={require('../assets/request-book.png')}
            style={{width:50,height:50}}/>,

            tabBarLabel:"RequestBooks"
        }
    }

})