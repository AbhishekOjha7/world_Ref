import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductDetails = ({route}: any) => {
  const {title, description, image, price} = route.params;
  console.log('====', title, description);

  return (
    <View>
      <Text>{title}</Text>
      <Image
        source={{uri: image}}
        style={{resizeMode: 'contain', height: 50, width: 50}}
      />
      <Text>{price}</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
