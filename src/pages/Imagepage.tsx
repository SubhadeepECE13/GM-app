import image_x from '../assets/image_x.png';
import image_y from '../assets/image_y.png';
import image_z from '../assets/image_z.png';
import Skincare_image from '../assets/Skincare_image.png';
import ham_image from '../assets/ham_image.png';
import Arrow_image from '../assets/Arrow_image.png';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const Imagepage = () => {
    const { width, height } = Dimensions.get('window');
    return (
        <View
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height,
                width,
            }}>
            <View style={{ width, flexDirection: "row", justifyContent: "space-between", padding: 15, }}>
                <TouchableOpacity>
                    <Image source={Arrow_image} style={{ width: 20, height: 20, marginLeft: 5, marginTop: 5 }} />
                </TouchableOpacity>
                <Text
                    style={[
                        styles.text,
                        {},
                    ]}>
                    IMAGE
                </Text>
                <TouchableOpacity style={{}}>
                    <Image
                        source={ham_image}
                        style={{ width: 30, height: 30, right: 0 }}
                    />
                </TouchableOpacity>
            </View>

            <View
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 60,
                    height: '70%',
                    borderRadius: 90,
                }}>

                <View>
                    <Text style={styles.headingText}> Lorem Ipsum</Text>
                    <TouchableOpacity>
                        <Text style={[styles.text, {}]}> View All ></Text>
                    </TouchableOpacity>

                </View>
                <Text style={styles.headingText}>SKIN CARE</Text>
                <Image
                    source={image_x}
                    style={{ width: 220, height: 190, borderRadius: 20 }}
                />
                <Text style={styles.headingText}>SKIN CARE</Text>
                <View>
                    <Text style={styles.headingText}> Lorem Ipsum</Text>
                    <TouchableOpacity>
                        <Text style={[styles.text, {}]}> View All ></Text>
                    </TouchableOpacity>

                </View>
                <Image
                    source={image_y}
                    style={{ width: 220, height: 190, borderRadius: 20 }}
                />

                <Text style={styles.headingText}>SKIN CARE</Text>
                <View>
                    <Text style={styles.headingText}> Lorem Ipsum</Text>
                    <TouchableOpacity>
                        <Text style={[styles.text, {}]}> View All ></Text>
                    </TouchableOpacity>

                </View>
                <Image
                    source={image_z}
                    style={{ width: 220, height: 190, borderRadius: 20 }}
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headingText: {
        fontWeight: "500",
        color: 'black',
        textAlign: 'center',
    },
    text: {
        textAlign: 'right',
        color: '#354169',
        fontWeight: "bold",
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
        fontSize: 18,
        fontWeight: 'bold',
    },
    welcomeText: {
        fontWeight: "bold",
        color: '#354169',
    },
});

export default Imagepage;
