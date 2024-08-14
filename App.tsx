/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Getstarted from './src/pages/Getstarted';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Homepage from './src/pages/Homepage';
import Orthopage from './src/pages/Orthopage';
import Imagepage from './src/pages/Imagepage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Image } from 'react-native';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Getstarted} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Profile" component={Login} />
    //     <Stack.Screen name="Settings" component={Signup} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Imagepage/>
  );
}

export default App;
