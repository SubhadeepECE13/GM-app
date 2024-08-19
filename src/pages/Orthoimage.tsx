import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BackButton from '../components/BackButton';
import ImageView from '../components/ImageView';
import NavigationBar from '../components/NavigationBar';
import omego_card from '../assets/omego_card.jpg';
import image_y from '../assets/image_y.png';
import image_z from '../assets/image_z.png';
import ham_image from '../assets/ham_image.png';

const Imagepage = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height,
        width,
      }}>
      <View
        style={{
          width,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <BackButton/>
        <Text style={[styles.text, {fontSize: 20}]}>IMAGE</Text>
        <TouchableOpacity style={{}}>
          {/* <Image source={ham_image} style={{width: 30, height: 30, right: 0}} /> */}
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: 'flex',
          marginBottom: 90,
          height: '70%',
          borderRadius: 100,
        }}>
            <ImageView image={omego_card} heading='Lorem Ipsum' btnName='View All' about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "/>
            {/* <ImageView image={image_y} heading='Lorem Ipsum' btnName='View All' about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "/> */}
            {/* <ImageView image={image_z} heading='Lorem Ipsum' btnName='View All' about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "/> */}
        </View>
        <NavigationBar/>
    </View>
  );
};

const styles = StyleSheet.create({
    headingText: {
      fontWeight: '500',
      color: 'black',
      textAlign: 'center',
    },
    text: {
      textAlign: 'right',
      color: '#354169',
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
      fontSize: 18,
      fontWeight: 'bold',
    },
    welcomeText: {
      fontWeight: 'bold',
      color: '#354169',
    },
  });

export default Imagepage;
