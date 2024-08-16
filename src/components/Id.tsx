import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image,  } from 'react-native'

const View = ({ imageUrl, heading, about, textColor, text }: any) => {
    return (
        <TouchableOpacity style={[{ width: "90%", padding: 30, flexDirection: "row", borderRadius: 20, }]}>

            <Image source={imageUrl} style={{ height: 130, width: 110, borderRadius: 10, marginRight: 20 }} />
            <View style={{ flexDirection: "column", alignItems: "flex-start", }}>
                <Text style={{ color: `${textColor}`, fontWeight: "bold" }}>{heading}</Text>
                <Text style={{ color: `${textColor}`, fontWeight: "400" }}>{about}</Text>

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
export default View