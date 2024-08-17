import banner_image from '../assets/banner_image.jpg';
import logo_image from '../assets/logo_image.png';
import React from 'react';
import {
  View,
  Image,
  Dimensions,
} from 'react-native';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const Getstarted = () => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');
  return (
    <View style={{display: 'flex', justifyContent: 'space-between', height, backgroundColor: 'white'}}>
      <Image source={banner_image} style={{width, height: 300}} />
      <Image
        source={logo_image}
        style={{width: 160, height: 160, marginLeft: 120, marginBottom:40}}
      />
      <View style={{marginBottom: 30, marginHorizontal: 10}}>
        <Button buttonName="Get Started" onPress={() => navigation.navigate('Login')}/>
      </View>
    </View>
  );
};

export default Getstarted;
