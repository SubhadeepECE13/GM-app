import ortho_image from '../assets/gp_image.jpg'
import gyno_image from '../assets/gyno_image.png'
import Skincare_image from '../assets/Skincare_image.png'
import box_image from '../assets/box.png'
import ham_image from '../assets/ham_image.png'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ImageBackground, } from 'react-native'
import Button from '../components/Button'

const Homepage = () => {
    const { width, height } = Dimensions.get('window')
    return (
        <View style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', height, width }}>
            <View style={{ position: "relative", width }}>

                <Text style={[styles.text, { position: "absolute", left: 50, right: 50, top: 2 }]}>HOME</Text>
                <TouchableOpacity style={{}}>
                    <Image source={ham_image} style={{ width: 30, height: 30, position: "absolute", right: 0 }} />
                </TouchableOpacity>

            </View>


            <View style={{ width: '80%', height: 120, backgroundColor: '#9391C0', }}>
                <Text>Welcome Back......</Text>
                <Text style={{fontWeight:"bold",color:"black"}}>Hi, Lorem  Ipsum</Text>
                <Text>Lorem ipsum dolor sit amet</Text>
                
                <Text>consectetur adipiscing elit, sed do</Text>

            </View>
            <View style={{ display: 'flex', justifyContent: "space-between", marginBottom: 60, height: "70%", borderRadius: 90, }}>

                <TouchableOpacity>
                    <Image source={ortho_image} style={{ width: 220, height: 190, borderRadius:20}} />
                    <Text style={styles.headingText}>GP and ORTHO
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={gyno_image} style={{ width: 220, height: 190,borderRadius:20 }} />

                    <Text style={styles.headingText}>GYNECOLOGY
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={Skincare_image} style={{ width: 220, height: 190, borderRadius:20}} />
                    <Text style={styles.headingText}>SKIN CARE
                    </Text>
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



export default Homepage