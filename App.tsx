/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Getstarted from './src/pages/Getstarted';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Homepage from './src/pages/Homepage';
import Orthopage from './src/pages/Orthopage';
import Imagepage from './src/pages/Imagepage';
import Gynopage from './src/pages/Gynopage';
import Skincare from './src/pages/Skincare';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Getstarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="HomePage" component={Homepage} />
        <Stack.Screen name="OrthoPage" component={Orthopage} />
        <Stack.Screen name="SkinCare" component={Skincare} />
        <Stack.Screen name="GynoPage" component={Gynopage} />
        <Stack.Screen name="ImagePage" component={Imagepage} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Skincare/>
  );
}

export default App;
