import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootRouter from './src/router'
import { Provider } from 'react-redux'
import { store } from './src/store'

const App = () => {
  return (
    <Provider store={store}>
   <RootRouter/>
   </Provider>
  )
}

export default App

const styles = StyleSheet.create({})