import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './bottomTabNavigator';
import Login from '../modules/authModule/Login';
import ProductDetails from '../modules/productDetails';

const Stack = createNativeStackNavigator();

const RootRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Account" component={Account} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
