import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// action imports
import {getProducts} from './action';
import React, {useEffect} from 'react';
//utils import
import {normalize} from '../../utils/dimensions';
import {showToast} from '../../utils/commonFunction';
const {width} = Dimensions.get('screen');
const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const {product_Detail} = useSelector((store: any) => store.productReducer);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(
      getProducts(
        (onSuccess: boolean) => {
          if (onSuccess) {
            // setLoader(false)
          }
        },
        (onFailure: boolean) => {
          if (!onFailure) {
            // setLoader(false)
            showToast('something went wrong');
          }
        },
      ),
    );
  }, []);

  const handleNavigate = (item: any) => {
    navigation.navigate('ProductDetails', {
      title: item?.title,
      description: item?.description,
      image: item?.image,
      price: item?.price,
    });
  };
  const _renderItem = ({item}: any) => {
    return (
      <View style={styles.containerRender}>
        <Image source={{uri: item?.image}} style={styles.renderImg} />
        <TouchableOpacity onPress={() => handleNavigate(item)}>
          <Text numberOfLines={1} style={styles.titleStyle}>
            {item?.title}
          </Text>
          <Text style={styles.descStyle} numberOfLines={1}>
            {item?.description}
          </Text>
          <View style={styles.priceView}>
            <Text style={styles.priceColor}>${item?.price}</Text>
            <View style={styles.ratingView} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={product_Detail} renderItem={_renderItem} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
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
    color:'black'
  },
  descStyle: {
    width: (width * 2) / 3,
    textAlign: 'justify',
    color:'black'
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
});
