import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import Home_image from '../assets/Home_image.png';
import play_image from '../assets/play_image.png';
import notepad_image from '../assets/notepad_image.png';
import notes_image from '../assets/notes_image.png';
import account_image from '../assets/account_image.png';

const NavigationBar = () => {
  return (
    <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 20,  backgroundColor: '#e9e9e9'}}>
      <TouchableOpacity style={styles.button}>
        <Image source={Home_image} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={play_image} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={notepad_image} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={notes_image} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={account_image} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    width: '20%',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 10,
    marginRight: 20,
  },
});
export default NavigationBar;
