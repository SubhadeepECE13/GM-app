import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Arrow_image from '../assets/Arrow_image.png';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Image
        source={Arrow_image}
        style={{width: 20, height: 20, marginLeft: 5, marginTop: 5}}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
