import Arrow_image from '../assets/Arrow_image.png';
import React from 'react';
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
import email from '../assets/email.png';
import lock from '../assets/lock.png';
import eye from '../assets/eye.png';
import google from '../assets/google.png';
import apple from '../assets/apple.png';
import facebook from '../assets/facebook.png';

const Login = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={{height}}>
      <Image
        source={Arrow_image}
        style={{width: 30, height: 30, marginLeft: 5, marginTop: 5}}
      />
      <View
        style={{
          height: '54%',
          display: 'flex',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text style={styles.text}>Login</Text>
        <Text style={[styles.welcomeText, {textAlign: 'left'}]}>Welcome!!</Text>
        <View
          style={{
            borderColor: 'black',
            display: 'flex',
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 20,
          }}>
          <Image
            source={email}
            style={{height: 20, width: 20, marginLeft: 10, top: 15}}
          />
          <TextInput placeholder="email" />
        </View>

        <View
          style={{
            borderColor: 'black',
            display: 'flex',
            flexDirection: 'row',
            paddingEnd: 5,
            justifyContent: 'space-between',
            borderWidth: 1,
            borderRadius: 100,
          }}>
          <Image
            source={lock}
            style={{height: 20, width: 20, marginLeft: 10, top: 15}}
          />
          <TextInput placeholder="Password" style={{width: '80%'}} />
          <Image
            source={eye}
            style={{height: 20, width: 20, marginLeft: 10, top: 15}}
          />
        </View>

        <Text style={[styles.welcomeText, {textAlign: 'right'}]}>
          Forgot Password?
        </Text>
        <Button buttonName="Login" />
      </View>
      <View
        style={{
          height: '27%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={[styles.headingText, {fontSize: 18}]}>OR</Text>
        <Text style={styles.headingText}>Log in with</Text>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '80%',
          }}>
          <View
            style={{
              borderColor: 'cyan',
              borderWidth: 1.5,
              borderRadius: 100,
              padding: 20,
            }}>
            <Image source={google} style={{height: 30, width: 30}} />
          </View>
          <View
            style={{
              borderColor: 'cyan',
              borderWidth: 1.5,
              borderRadius: 100,
              padding: 20,
            }}>
            <Image source={apple} style={{height: 30, width: 30}} />
          </View>
          <Image source={facebook} style={{height: 65, width: 65}} />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.headingText}>Don’t have an account yet? </Text>
          <TouchableOpacity>
            <Text style={{color: '#354169', fontWeight: 'bold'}}>
              Register Now
            </Text>
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
  },
  text: {
    textAlign: 'center',
    color: '#354169',
    marginVertical: 30,
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

export default Login;