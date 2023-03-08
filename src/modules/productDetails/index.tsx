import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {normalize} from '../../utils/dimensions';
import localImages from '../../utils/localImages';
import { useNavigation } from '@react-navigation/native';
const {width} = Dimensions.get('screen');
const ProductDetails = ({route}: any) => {
  const  navigation=useNavigation<any>();
  const {title, description, image, price} = route.params;
  const NavigateBack=()=>{
   navigation.goBack()
  }
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.backView} onPress={NavigateBack}>
          <Image style={styles.backIcon} source={localImages.back_button}/>
        </TouchableOpacity>
      <View style={styles.mainContainer}>
        <Image source={{uri: image}} style={styles.renderImg} />
        <TouchableOpacity>
          <Text numberOfLines={1} style={styles.titleStyle}>
            {title}
          </Text>
          <Text style={styles.descStyle} numberOfLines={1}>
            {description}
          </Text>
          <View style={styles.priceView}>
            <Text style={styles.priceColor}>${price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  renderImg: {
    height: normalize(90),
    width: normalize(90),
    resizeMode: 'contain',
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
  priceColor: {
    color: 'green',
    fontSize: 18,
  },
  mainContainer: {
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: 'light-grey',
    margin: normalize(6),
    padding: normalize(5),
    borderRadius: normalize(5),
    marginTop: normalize(15),
  },
  backView:{
    marginHorizontal:normalize(20)
  },
  backIcon:{
    height:normalize(30),width:normalize(30)
  }
});
