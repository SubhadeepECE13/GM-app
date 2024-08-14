import ham_image from '../assets/ham_image.png'
import Arrow_image from '../assets/Arrow_image.png'
import image_1 from '../assets/image_1.png'
import image_2 from '../assets/image_2.png'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ImageBackground, } from 'react-native'
import Card from '../components/Card'

const Orthopage = () => {
    const { width, height } = Dimensions.get('window')
    return (
        <View style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', height, width }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 15, width }}>
                <TouchableOpacity>
                    <Image source={Arrow_image} style={{ width: 20, height: 20, marginLeft: 5, marginTop: 5 }} />
                </TouchableOpacity>

                <TouchableOpacity style={{}}>
                    <Image source={ham_image} style={{ width: 30, height: 30, }} />
                </TouchableOpacity>

            </View>

            <View style={{ display: 'flex', justifyContent: "space-between",alignItems:"center",marginBottom: 60, height: "70%",width, borderRadius: 90, }}>

                <Card bgColor="#354169" imageUrl={image_1} heading="Image" about="Lorem ipsum dolor sit amet,"  textColor="#FFFFFF" text="Lorem ipsum dolor sit amet,"/>
                <Card bgColor="#C8A64E" imageUrl={image_2} heading="PDF" about="Lorem ipsum dolor sit amet," textColor="#000000" text="Lorem ipsum dolor sit amet,"/>


            </View>







        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {

        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',

    },
    text: {
        textAlign: 'center',
        color: '#354169',

        fontWeight: 'bold',
        fontSize: 25,

    },
    button: {

        paddingVertical: 10,
        borderRadius: 280,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 560,
        bottom: 90,
        marginTop: 200,
        height: 50,
        left: '10%',

    },
    buttonText: {
        color: 'Red',
        fontSize: 18,
        fontWeight: 'bold',
    },
    welcomeText: {

        fontWeight: 'bold',
        color: '#354169',

    },
});



export default Orthopage