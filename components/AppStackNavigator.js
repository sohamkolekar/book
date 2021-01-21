import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import Donate from '../screens/BookDonate'
import Reciever from '../screens/RecieverDetails'


export const Stack = createStackNavigator(
    {
        BookDonateList: {
            screen: Donate,
            navigationOptions: {
                headerShown: false
            }
        },
        RecieverDetails: {
            screen: Reciever,
            navigationOptions: {
                headerShown: false
            }
        }
    },

    {
        initialRouteName: BookDonateList
    }

    
    )



