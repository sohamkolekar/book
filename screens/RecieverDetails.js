import React from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase'
import db from '../config'


export default class Reciever extends React.Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            BookName:'',
            ReasonTORequest:'',
            recieverId:''    
        }
    }
    render(){
        return(
            <View>

            </View>
        )
    }
}

