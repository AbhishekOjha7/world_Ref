import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import BottomTabNavigator from '../../router/bottomTabNavigator'
import { getProducts } from './action'
import { useDispatch, useSelector } from 'react-redux'
import { showToast } from '../../utils/commonFunction'

const HomeScreen = () => {
   const {product_Detail} = useSelector((store: any) => store.productReducer);
   console.log("pp",product_Detail);
  const dispatch=useDispatch<any>();
  useEffect(()=>{
     dispatch(
       getProducts((onSuccess: boolean)=>{
        if(onSuccess){
          // setLoader(false)
        }
       },(onFailure:boolean)=>{
         if(!onFailure){
          // setLoader(false)
           showToast("something went wrong")
         }
        
       })
     )
  },[])
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
       {/* <FlatList
       data=
       /> */}
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})