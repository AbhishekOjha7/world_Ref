import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { getProducts } from './action'
import { useDispatch, useSelector } from 'react-redux'
import { showToast } from '../../utils/commonFunction'
import { normalize } from '../../utils/dimensions'
const {width} = Dimensions.get('screen');
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
  const _renderItem=({item,index}:any)=>{
    console.log("iiii",item);
    
    return(
      <View style={styles.containerRender}>
        <Image source={{uri: item?.image}} style={styles.renderImg} />
        <View>
          <Text numberOfLines={1} style={styles.titleStyle}>
            {item?.title}
          </Text>
          <Text style={styles.descStyle} numberOfLines={1}>
            {item?.description}
          </Text>
          <View style={styles.priceView}>
            <Text style={styles.priceColor}>${item?.price}</Text>
            <View style={styles.ratingView}>
              {/* <Text style={styles.ratetxt}>{item?.rating?.rate}</Text> */}
              {/* <Image style={styles.rateImg} source={images?.star} /> */}
            </View>
          </View>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
       <FlatList
       data={product_Detail}
       renderItem={_renderItem}
       />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  containerRender: {
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: 'light-grey',
    margin: normalize(6),
    padding: normalize(5),
    borderRadius: normalize(5),
    marginTop: normalize(15),
  },
  titleStyle: {
    width: (width * 2) / 3,
    fontSize: 18,
    fontWeight: '600',
  },
  descStyle: {
    width: (width * 2) / 3,
    textAlign: 'justify',
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalize(10),
  },
  headerView: {
    flexDirection: 'row',
  },
  priceColor: {
    color: 'green',
    fontSize: 18,
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratetxt: {
    fontSize: 18,
  },
  rateImg: {
    height: normalize(20),
    width: normalize(25),
  },
  renderImg: {
    height: normalize(90),
    width: normalize(90),
    resizeMode: 'contain',
  },
})