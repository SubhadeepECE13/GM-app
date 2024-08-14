import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Button from '../components/Button';
import box from '../assets/box.png';
import boxChecked from '../assets/Check.png';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';

const Signup = () => {
  const {width, height} = Dimensions.get('window');
  const [checkbox, setCheckbox] = useState(false);
  const navigation = useNavigation();

  function check() {
    setCheckbox(!checkbox);
  }
  return (
    <View style={{height}}>
      <BackButton />
      <View
        style={{
          height: '44%',
          display: 'flex',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text style={styles.buttonText}>Register Now</Text>
        <Text style={styles.welcomeText}>Welcome!!</Text>

        <View
          style={[styles.button, {borderRadius: 27, paddingHorizontal: 20}]}>
          <TextInput
            style={{
              color: 'white',
              width: '100%',
              height: 40,
              fontWeight: 'medium',
            }}
            placeholder="Full Name"
            placeholderTextColor="white"
          />
        </View>

        <View
          style={[styles.button, {borderRadius: 27, paddingHorizontal: 20}]}>
          <TextInput
            style={{
              color: 'white',
              width: '100%',
              height: 40,
              fontWeight: 'medium',
            }}
            placeholder="Email"
            placeholderTextColor="white"
          />
        </View>

        <View
          style={[styles.button, {borderRadius: 27, paddingHorizontal: 20}]}>
          <TextInput
            style={{
              color: 'white',
              width: '100%',
              height: 40,
              fontWeight: 'medium',
            }}
            placeholder="Password"
            placeholderTextColor="white"
          />
        </View>

        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
          <TouchableOpacity onPress={check}>
            <Image
              source={checkbox ? boxChecked : box}
              style={{height: 20, width: 20, marginRight: 18}}
            />
          </TouchableOpacity>
          <Text style={styles.headingText}>I accept the </Text>

          <Text
            style={[
              styles.text,
              {color: '#354169', fontWeight: 'bold', flexDirection: 'row'},
            ]}>
            Terms{' '}
          </Text>
          <Text
            style={[
              styles.text,
              {color: 'black', fontWeight: 'bold', flexDirection: 'row'},
            ]}>
            and{' '}
          </Text>
          <Text
            style={[
              styles.text,
              {color: '#354169', fontWeight: 'bold', flexDirection: 'row'},
            ]}>
            Conditions
          </Text>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 100}}></View>
      <View
        style={{
          height: '37%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <Button
          buttonName="Sign Up"
          onPress={() => {
            navigation.navigate('HomePage');
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
          }}>
          <Text style={styles.headingText}>Already Register? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
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
  },
  button: {
    paddingVertical: 10,
    borderRadius: 280,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#354169',
  },
  buttonText: {
    color: '#354169',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcomeText: {
    fontWeight: 'bold',
    color: '#354169',
  },
  buttonName: {
    fontWeight: 'heavy',
    color: '#354169',
  },
});

export default Signup;
