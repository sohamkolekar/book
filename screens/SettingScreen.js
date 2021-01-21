import React from 'react';
import { View, Text,TextInput,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyHeader from '../components/MyHeader'
import firebase from 'firebase';
import db from '../config'
import { Alert } from 'react-native';

export default class Setting extends React.Component {
    constructor(){
        super()
        this.state={
            Address:'',
            PhoneNo:'',
            LastName:'',
            FirstName:'',
            EmailId:'',
            DocId:''
        }
    }
    getUserDetails=()=>{
        var email=firebase.auth().currentUser.email
        console.log(email)
        db.collection('users').where('email_id','==',email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data = doc.data()
                console.log(data)
                this.setState({
                    EmailId:data.email_id,
                    Address:data.address,
                    PhoneNo:data.contact,
                    FirstName:data.first_name,
                    LastName:data.last_name,
                    DocId:doc.id
                })
            })
        })
    }
    updateUserDetails(){
       try{ 
        db.collection('users').doc(this.state.DocId).update({
            "first_name":this.state.FirstName,
            "address":this.state.Address,
            "last_name":this.state.LastName,
            "contact":this.state.PhoneNo,
            
        })
        console.log("user details updated")
        }
        catch(error){
            var ErrorCode=error.code;
            var ErrorMessage=error.message
        Alert.alert(ErrorMessage)
        
        }
    }
    componentDidMount(){
        this.getUserDetails()
    }
    render() {
        return (
            <View>
                <Text>Setting screen</Text>
                <TextInput
                    style={styles.formTextInput}
                    placeholder={"First Name"}
                    maxLength={8}
                    onChangeText={(text) => {
                        this.setState({
                            FirstName: text
                        })
                    }}
                    value={this.state.FirstName}
                />
                <TextInput
                    style={styles.formTextInput}
                    placeholder={"Last Name"}
                    maxLength={8}
                    onChangeText={(text) => {
                        this.setState({
                            LastName: text
                        })
                    }}
                    value={this.state.LastName}
                />
                <TextInput
                    style={styles.formTextInput}
                    placeholder={"Address"}
                    maxLength={8}
                    onChangeText={(text) => {
                        this.setState({
                            Address: text
                        })
                    }}
                    value={this.state.Address}
                />
                <TextInput
                    style={styles.formTextInput}
                    placeholder={"PhoneNo"}
                    maxLength={8}
                    onChangeText={(text) => {
                        this.setState({
                            PhoneNo: text
                        })
                    }}
                    value={this.state.PhoneNo}
                />
                
                <TouchableOpacity
                style={{width:'100%',height:30,backgroundColor:"blue"}}
                onPress={()=>{
                    this.updateUserDetails()
                }}
                >
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

/*<MyHeader
                title="Profile Change"/>*/

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
                })