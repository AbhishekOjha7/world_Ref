import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import localImages from '../utils/localImages';
import HomeScreen from '../modules/homeScreen';
import Account from '../modules/accountScreen';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.iconsize}
                source={!focused ? localImages.home : localImages.homeButton}
              />
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.iconsize}
                source={
                  !focused ? localImages.profile : localImages.profile_button
                }
              />
            );
          },
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  iconsize: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});
