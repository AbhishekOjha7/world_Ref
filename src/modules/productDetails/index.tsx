import {Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { normalize } from '../../utils/dimensions';
const {width} = Dimensions.get('screen');
const ProductDetails = ({route}: any) => {
  const {title, description, image, price} = route.params;
  console.log('====', title, description);

  return (
    <SafeAreaView>
      {/* <Text>{title}</Text>
      <Image
        source={{uri: image}}
        style={{resizeMode: 'contain', height: 50, width: 50}}
      />
      <Text>{price}</Text> */}



<Image source={{uri:image}} style={styles.renderImg} />
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
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
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
});
