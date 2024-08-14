import React from 'react'
import { StyleSheet, Text, TouchableOpacity,Image } from 'react-native'

const Card = ({bgColor,imageUrl,heading,about,textColor,text}: any) => {
    return (
        <TouchableOpacity style={[ { width:"90%",backgroundColor:`${bgColor}`,padding:20, flexDirection:"row",borderRadius:10, }]}>
            <Image source={imageUrl} style={{height:130,width:110,borderRadius:10,marginRight:20}}/>
            <Text style={{color:`${textColor}`,alignSelf:"center",alignItems:"center"}}>{heading}{about}{text}</Text>
        </TouchableOpacity>
        

    )
}
const styles = StyleSheet.create({

    text: {
        
        fontSize: 18,
        fontWeight: 'bold',
    },
},
);
export default Card