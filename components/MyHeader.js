import React from 'react';
import {Header} from 'react-native-elements'

const MyHeader=props=>{ 
   return (
       
       <Header 
        centerComponent={{
            text:props.title ,
            style:{
                color:'red',
                fontSize:15,
                fontWeight:'bold'
                }
            }}
        backgroundColor="green"
    
       />
   )
}

export default MyHeader