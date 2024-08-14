import ortho_image from '../assets/gp_image.jpg';
import gyno_image from '../assets/gyno_image.png';
import Skincare_image from '../assets/Skincare_image.png';
import ham_image from '../assets/ham_image.png';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ImageButton from '../components/ImageButton';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height,
        width,
      }}>
      <View style={{position: 'relative', width}}>
        <Text
          style={[
            styles.text,
            {position: 'absolute', left: 50, right: 50, top: 2},
          ]}>
          HOME
        </Text>
        <TouchableOpacity style={{}}>
          <Image
            source={ham_image}
            style={{width: 30, height: 30, position: 'absolute', right: 0}}
          />
        </TouchableOpacity>
      </View>

      <View style={{width: '80%', height: 120, backgroundColor: '#9391C0'}}>
        <Text>Welcome Back......</Text>
        <Text style={{fontWeight: 'bold', color: 'black'}}>
          Hi, Lorem Ipsum
        </Text>
        <Text>Lorem ipsum dolor sit amet</Text>

        <Text>consectetur adipiscing elit, sed do</Text>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 60,
          height: '70%',
          borderRadius: 90,
        }}>
          <ImageButton image = {ortho_image} text='GP and ORTHO' onPress={()=>{navigation.navigate('OrthoPage')}}/>
          <ImageButton image = {gyno_image} text='GYNECOLOGY' onPress={()=>{navigation.navigate('GynoPage')}}/>
          <ImageButton image = {Skincare_image} text='SKIN CARE' onPress={()=>{navigation.navigate('SkinCare')}}/>        
      </View>
    </View>
  );
};

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

export default Homepage;
