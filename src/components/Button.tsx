import React from 'react'
import { StyleSheet, Text, TouchableOpacity, } from 'react-native'


const Button = ({ buttonName }: any) => {

  return (
    <TouchableOpacity style={[styles.button, { width: '100%' }]}>
      <Text style={styles.buttonText}>{buttonName}</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({

  text: {
   color: 'Red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#354169',
    paddingVertical: 10,
    borderRadius: 280,
    alignItems: 'center',
    justifyContent: 'center',

    //marginHorizontal: 20,
    height: 70,

  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default Button