import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'

import db from '../config'
import firebase from 'firebase'

export default class Menu extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Text>side Drawer NAvigator</Text>
                <View style={styles.drawerItems}>
                <DrawerItems 
                    style={styles.drawerItems}
                    {...this.props}

                />
                </View>
                <View style={styles.logoutContainer}>
                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    this.props.navigation.navigate('Welcome')
                    firebase.auth().signOut()
                }}>
                    <Text>Logout</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    drawerItems:{
        flex:0.8
    },
    button:{
        width:'100%',
        height:30,
        backgroundColor:"green"
    },
    logoutContainer:{
        flex:0.2

    }
})
