import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ImageBackground, } from 'react-native'
import Card from '../components/Card'
import NavigationBar from '../components/NavigationBar'
import ham_image from '../assets/ham_image.png'
import Arrow_image from '../assets/Arrow_image.png'
import image_1 from '../assets/image_1.png'
import image_2 from '../assets/image_2.png'

const Orthopage = () => {
    const { width, height } = Dimensions.get('window')
    
    return (
        <View style={[styles.conainer,{ height, width }]}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 15, width }}>
                <TouchableOpacity>
                    <Image source={Arrow_image} style={{ width: 20, height: 20, marginLeft: 5, marginTop: 5 }} />
                </TouchableOpacity>

                <TouchableOpacity style={{}}>
                    <Image source={ham_image} style={{ width: 30, height: 30, }} />
                </TouchableOpacity>


            </View>
            <View>
                <Text style={styles.welcomeText}> GP and ORTHO</Text>
                <Text style={styles.headingText}> Lorem Ipsum</Text>
                <TouchableOpacity>
                    <Text style={[styles.text, {}]}> View All ></Text>
                </TouchableOpacity>

            </View>


            <View style={[styles.cardsSection,{ width}]}>
                <Card bgColor="#354169" imageUrl={image_1} heading="IMAGE" about="Lorem ipsum dolor sit amet," textColor="#FFFFFF" text="Lorem ipsum dolor sit amet," />
                <Card bgColor="#C8A64E" imageUrl={image_2} heading="PDF" about="Lorem ipsum dolor sit amet," textColor="#000000" text="Lorem ipsum dolor sit amet," />
            </View>
            <NavigationBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    conainer:{
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    headingText: {
        fontWeight: 'bold',
        color: '#3B3939',
        textAlign: 'left',
    },
    cardsSection:{
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 120,
        marginTop: 10,
        height: "50%",
        borderRadius: 90, 
    },
    text: {
        textAlign: "right",
        color: '#1E1E1E',
        left: "20%",

        fontWeight: 'bold',
        fontSize: 10,

    },
    welcomeText: {
        fontWeight: "bold",
        color: '#354169',
        fontSize: 35,
        textAlign:"left",
        fontWeight:"900",
        marginRight:20
    },
});



export default Orthopage