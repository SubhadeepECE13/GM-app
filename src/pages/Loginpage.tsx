import Arrow_image from '../assets/Arrow_image.png'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Dimensions, ImageBackground, } from 'react-native'
import Button from '../components/Button'
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import facebook from '../assets/facebook.png'
import box from '../assets/box.png'
import boxChecked from '../assets/Check.png'
const Loginpage = () => {
    const { width, height } = Dimensions.get('window')
    const [checkbox, setCheckbox] = useState(false)
    function check() {
        setCheckbox(!checkbox)
    }
    return (
        <View style={{ height }}>
            <TouchableOpacity>
                <Image source={Arrow_image} style={{ width: 20, height: 20, marginLeft: 5, marginTop: 5 }} />
            </TouchableOpacity>
            <View style={{ height: '54%', display: 'flex', justifyContent: 'space-between', marginHorizontal: 20, }}>
                <Text style={styles.buttonText}>Register Now</Text>
                <Text style={styles.welcomeText}>Welcome!!</Text>

                <View style={[styles.button, { borderRadius: 27, paddingHorizontal: 20 }]}>

                    <TextInput style={{ color: 'white', width: '100%', height: 40, fontWeight: 'medium' }} placeholder='Full Name' placeholderTextColor='white' />

                </View>

                <View style={[styles.button, { borderRadius: 27, paddingHorizontal: 20 }]}>

                    <TextInput style={{ color: 'white', width: '100%', height: 40, fontWeight: 'medium' }} placeholder='Email' placeholderTextColor='white' />

                </View>

                <View style={[styles.button, { borderRadius: 27, paddingHorizontal: 20 }]}>

                    <TextInput style={{ color: 'white', width: '100%', height: 40, fontWeight: 'medium' }} placeholder='Password' placeholderTextColor='white' />

                </View>

                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity onPress={check}>

                        <Image source={(checkbox) ? boxChecked : box} style={{ height: 20, width: 20, marginRight: 18 }} />
                    </TouchableOpacity>
                    <Text style={styles.headingText}>I accept the </Text>


                    <Text style={[styles.text, { color: '#354169', fontWeight: 'bold', flexDirection: 'row' }]}>Terms </Text>
                    <Text style={[styles.text, { color: 'black', fontWeight: 'bold', flexDirection: 'row' }]}>and </Text>
                    <Text style={[styles.text, { color: '#354169', fontWeight: 'bold', flexDirection: 'row' }]}>Conditions</Text>
                </View>

                <Button buttonName='Sign Up' />

            </View>
            <View style={{ height: '27%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>



            </View>

            <View style={{ flexDirection: 'row', width: "100%", justifyContent: 'center', display: "flex" }}>

                <Text style={styles.headingText}>Already Register? </Text>
                <TouchableOpacity>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
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
        // marginVertical: 30,
        fontWeight: 'bold',


    },
    button: {

        paddingVertical: 10,
        borderRadius: 280,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#354169',



    },
    buttonText: {
        color: '#354169',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    welcomeText: {

        fontWeight: 'bold',
        color: '#354169',

    },
    buttonName: {

        fontWeight: 'heavy',
        color: '#354169',

    },

});


export default Loginpage