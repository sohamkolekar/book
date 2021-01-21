import React from 'react'
import { View, Text, FlatList,StyleSheet } from 'react-native'
import MyHeader from '../components/MyHeader'
import firebase from 'firebase';
import db from '../config'
import { TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';


export default class Donate extends React.Component {
    constructor() {
        super()
        this.state = {
          //  userId: firebase.auth().currentUser,
            requestBooksList: [],
            
        }
        this.requestRef=null
    }
    getBookRequests = () => {
       this.requestRef= db.collection('requests')
       .onSnapshot((snapshot)=>{
           var requestBookList=snapshot.docs.map((doc)=>
               doc.data()  
           )
          
           this.setState({
               requestBooksList:requestBookList
           })
       })

       console.log(this.state.requestBooksList)
               
            
    }
   
    componentDidMount=()=>{
        this.getBookRequests()
    }
    componentWillUnmount=()=>{
        this.requestRef()
    }

    keyExtractor=(item,index)=>{
        console.log(index)
        index.toString()
    }
    renderItem=({item,i})=>{
        
        return(
            <ListItem
            key={item.i}
            title={item.bookName}
            subtitle={item.reasonForRequest}
            titleStyle={{fontWeight:'bold'}}
            rightElement={
                <TouchableOpacity
                style={styles.button}>
                    <Text>View</Text>
                </TouchableOpacity>
            }
            bottomDivider
            />
        )
    }
    render() { 
        return (
            <View style={{flex:1}}>
                <View>
                {this.state.requestBooksList.length===0
                ?(
                <Text>
                    List of all requested books
                    </Text>
                )
                :(

                
             
                <FlatList
                   keyExtractor={this.keyExtractor}
                   data={this.state.requestBooksList}
                   renderItem={this.renderItem}
                />
                )}      
                </View>
            </View>

        )
    }
}

/*<MyHeader
                title="Donate Books"/>*/
              /*  <MyHeader
                title="BookDonate"
                navigation={this.props.navigation}
                />*/

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: "#ff9800",
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
