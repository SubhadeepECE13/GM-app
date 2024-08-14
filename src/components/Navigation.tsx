import React from 'react'
import { StyleSheet, Text, TouchableOpacity,Image,View} from 'react-native'

const Navigation = ({imageUrl}: any) => {
    return (
        <TouchableOpacity style={[ { width:"20%",padding:20, flexDirection:"row",borderRadius:10,}]}>

            <Image source={imageUrl} style={{height:30,width:30,borderRadius:10,marginRight:20}}/>
            <View style={{flexDirection:"column",alignItems:"flex-start",}}>
            </View>
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
export default Navigation