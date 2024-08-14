import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ImageBackground, } from 'react-native'
import Card from '../components/Card'
import NavigationBar from '../components/NavigationBar'
import ham_image from '../assets/ham_image.png'
import Arrow_image from '../assets/Arrow_image.png'
import image_gyno from '../assets/image_gyno.png'
import image_2 from '../assets/image_2.png'
import { useNavigation } from '@react-navigation/native'
import BackButton from '../components/BackButton'

const Gynopage = () => {
    const {width, height} = Dimensions.get('window');
    const navigation = useNavigation();
    return (
      <View style={[styles.conainer, {height, width}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            width,
          }}>
          <BackButton/>
  
          <TouchableOpacity style={{}}>
            <Image source={ham_image} style={{width: 30, height: 30}} />
          </TouchableOpacity>
        </View>
        <View style = {{height: '15%', width, paddingHorizontal: 20, justifyContent: 'space-between'}}>
          <Text style={styles.welcomeText}>GYNECOLOGY</Text>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.headingText}> Lorem Ipsum</Text>
              <TouchableOpacity>
              <Text style={[styles.text, {}]}> View All &gt;</Text>
              </TouchableOpacity>
          </View>
        </View>
  
        <View style={[styles.cardsSection, {width}]}>
          <Card
            bgColor="#354169"
            imageUrl={image_gyno}
            heading="IMAGE"
            about="Lorem ipsum dolor sit amet,"
            textColor="#FFFFFF"
            text="Lorem ipsum dolor sit amet,"
            navigationScreen = 'ImagePage'
          />
          <Card
            bgColor="#C8A64E"
            imageUrl={image_2}
            heading="PDF"
            about="Lorem ipsum dolor sit amet,"
            textColor="#000000"
            text="Lorem ipsum dolor sit amet,"
          />
        </View>
        <NavigationBar />
      </View>
    );
}

const styles = StyleSheet.create({
    conainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headingText: {
      fontWeight: 'bold',
      color: '#3B3939',
    },
    cardsSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      height: '48%',
      borderRadius: 90,
      marginBottom: 100
    },
    text: {
      textAlign: 'right',
      color: '#1E1E1E',
      fontWeight: 'bold',
      fontSize: 10,
    },
    welcomeText: {
      fontWeight: 'bold',
      color: '#354169',
      fontSize: 35,
    },
  });



export default Gynopage