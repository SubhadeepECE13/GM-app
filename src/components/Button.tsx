import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface props {
  buttonName: string,
  onPress: ()=>void
}

const Button: React.FC<props> = ({buttonName, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
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
    width: '100%'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Button;
