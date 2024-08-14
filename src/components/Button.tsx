import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({buttonName}: any) => {
  return (
    <TouchableOpacity style={[styles.button]}>
      <Text style={styles.buttonText}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#354169',
    borderRadius: 30,
    justifyContent: 'center',
    height: 70,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Button;
