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
import OrhtoPdfpage from './src/pages/OrthoPdfpage';
import GynoPdfpage from './src/pages/GynoPdfPage';
import Orthoimage from './src/pages/Orthoimage';
import Gynoimage from './src/pages/Gynoimage';
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
        <Stack.Screen name="Gynoimage" component={Gynoimage} />
        <Stack.Screen name="Orthoimage" component={Orthoimage} />
        <Stack.Screen name="OrthoPdfPage" component={OrhtoPdfpage }/>
        <Stack.Screen name="GynoPdfPage" component={GynoPdfpage }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
