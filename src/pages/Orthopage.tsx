import ham_image from '../assets/ham_image.png'
import Arrow_image from '../assets/Arrow_image.png'
import image_1 from '../assets/image_1.png'
import image_2 from '../assets/image_2.png'
import Home_image from '../assets/Home_image.png'
import play_image from '../assets/play_image.png'
import notepad_image from '../assets/notepad_image.png'
import notes_image from '../assets/notes_image.png'
import account_image from '../assets/account_image.png'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ImageBackground, } from 'react-native'
import Card from '../components/Card'
import Navigation from '../components/Navigation'

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
            <View>
                <Text style={[styles.welcomeText, { textAlign:"left" ,fontWeight:"900",marginRight:20}]}> GP and ORTHO</Text>
                <Text style={[styles.headingText, {}]}> Lorem Ipsum</Text>
                <TouchableOpacity>
                    <Text style={[styles.text, {}]}> View All ></Text>
                </TouchableOpacity>

            </View>


            <View style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", marginBottom: 120, marginTop: 10, height: "50%", width, borderRadius: 90, }}>
                <Card bgColor="#354169" imageUrl={image_1} heading="IMAGE" about="Lorem ipsum dolor sit amet," textColor="#FFFFFF" text="Lorem ipsum dolor sit amet," />
                <Card bgColor="#C8A64E" imageUrl={image_2} heading="PDF" about="Lorem ipsum dolor sit amet," textColor="#000000" text="Lorem ipsum dolor sit amet," />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>

                <Navigation imageUrl={Home_image} />
                <Navigation imageUrl={play_image} />
                <Navigation imageUrl={notepad_image} />
                <Navigation imageUrl={notes_image} />
                <Navigation imageUrl={account_image} />
            </View>
        </View>









    )
}

const styles = StyleSheet.create({
    headingText: {

        fontWeight: 'bold',
        color: '#3B3939',
        textAlign: 'left',
        right: "15%",
        top: "17%"

    },
    text: {
        textAlign: "right",
        color: '#1E1E1E',
        left: "20%",

        fontWeight: 'bold',
        fontSize: 10,

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
        fontSize: 35,
        fontWeight: 'bold',
    },
    welcomeText: {

        fontWeight: "bold",
        color: '#354169',
        fontSize: 35,

    },
});



export default Orthopage