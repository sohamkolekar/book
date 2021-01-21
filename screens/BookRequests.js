import React  from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import MyHeader from '../components/MyHeader'
import firebase from 'firebase';
import db from '../config'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { Alert } from 'react-native';

export default class Request extends React.Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            BookName:'',
            ReasonTORequest:'',
            data:''

        }
    }
    createUniqueId=()=>{
        return Math.random().toString(36)
    }
    addrequests=(bookName,Reason)=>{
        var requestId=this.createUniqueId()
        if(bookName&&Reason){
            db.collection('requests').add({
                "userid":this.state.userId,
                "bookName":bookName,
                "reasonForRequest":Reason,
                "requestId":requestId
            })
            this.setState({
                userId:'',
                BookName:'',
                ReasonTORequest:''
            })
            console.log("added requests")
        }
        else{
            Alert.alert("enter details")
        }
    }
  
    
    render(){
        return(
            <View style={{flex:1}}>
                  <MyHeader
                    title="RequestBOok"
                
                    />
                <TextInput
                placeholder="Enter-Required-BookName"
                style={styles.formTextInput}
                onChangeText={(text)=>{
                    this.setState({
                        BookName:text
                    })
                }}/>
                <TextInput
                placeholder="Reason-to-request"
                style={styles.formTextInput}
                onChangeText={(text)=>{
                    this.setState({
                        ReasonTORequest:text
                    })
                }}/>
                <TouchableOpacity
                style={styles.button}
                onPress={()=>this.addrequests(this.state.BookName,this.state.ReasonTORequest)}>
                    <Text>Update</Text>
                </TouchableOpacity>
              
            
            </View>
        )
    }
}

/*<MyHeader
                title="Request Book"/>
                <Text>Book Requests Screen</Text>*/
const styles=StyleSheet.create({
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
      button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },
    })
