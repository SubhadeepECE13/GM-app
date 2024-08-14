import banner_image from '../assets/banner_image.png'
import logo_image from '../assets/logo_image.png'
import getstarted_image from '../assets/getstarted_image.png'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ImageBackground, } from 'react-native'
import Button from '../components/Button'

const Getstarted = () => {
  const { width, height } = Dimensions.get('window')
  return (
    <View style={{ display: 'flex', justifyContent: "space-between", height, }}>
      <Image source={banner_image} style={{ width, height: 300 }} />
      <Image source={logo_image} style={{ width: 160, height: 160, marginLeft: 115, }} />
      <View style={{ marginBottom: 30, }}>
        <Button buttonName='Get Started' />
      </View>






    </View>
  )
}



export default Getstarted