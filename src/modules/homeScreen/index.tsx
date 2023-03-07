import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import BottomTabNavigator from '../../router/bottomTabNavigator'

const HomeScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:'red'}}>
      <Text>index</Text>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})