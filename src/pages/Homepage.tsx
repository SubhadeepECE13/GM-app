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
import {useNavigation} from '@react-navigation/native';

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
            {
              position: 'absolute',
              left: 50,
              right: 50,
              top: 2,
              fontFamily: 'Rubik',
            },
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

      <View
        style={{
          width: '80%',
          height: 120,
          backgroundColor: '#9391C0',
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <View>
          <Text style={{fontSize: 8, marginBottom: 4, textAlign: 'center'}}>
            Welcome Back......
          </Text>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
            Hi, Lorem Ipsum
          </Text>
          <Text style={{marginBottom: 5, fontSize: 10}}>
            Lorem ipsum dolor sit amet
          </Text>

          <Text style={{fontSize: 10}}>
            consectetur adipiscing elit, sed do
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text>40 C</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          marginBottom: 60,
          height: '70%',
          borderRadius: 90,
          width,
        }}>
        <ImageButton
          image={ortho_image}
          text="GP and ORTHO"
          onPress={() => {
            navigation.navigate('OrthoPage');
          }}
        />
        <ImageButton
          image={gyno_image}
          text="GYNECOLOGY"
          onPress={() => {
            navigation.navigate('GynoPage');
          }}
        />
        <ImageButton
          image={Skincare_image}
          text="SKIN CARE"
          onPress={() => {
            navigation.navigate('SkinCare');
          }}
        />
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
