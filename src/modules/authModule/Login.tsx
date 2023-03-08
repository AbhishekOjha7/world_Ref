import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {normalize} from '../../utils/dimensions';
import CustomButton from '../../components/customButton';
import {useNavigation} from '@react-navigation/native';
import {login} from './action';
import {showToast} from '../../utils/commonFunction';
import {useDispatch} from 'react-redux';
const Login = () => {
  const navigation = useNavigation<any>();
  const [username, setUserName] = useState<string>('');
  const [password, setUserPassword] = useState<string>('');
  const dispatch = useDispatch<any>();
  const NavigateHome = () => {
    const params = {username: 'mor_2314', password: '83r5^_'};
    dispatch(
      login(
        params,
        (onSuccess: {status: number}) => {
          if (onSuccess.status === 200) {
            navigation.navigate('BottomTabNavigator');
          } else {
            showToast('login falil');
          }
        },
        (onFailure: {message: string}) => {
          showToast(onFailure.message);
        },
      ),
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerHead}>
        <Text style={styles.mobileTxt}>{'LOGIN'}</Text>
      </View>
      <View style={styles.numberView}>
        <TextInput
          placeholder="email"
          selectionColor={'grey'}
          value={username}
          style={styles.inputStyle}
          onChangeText={(text: string) => {
            setUserName(text);
          }}
        />
      </View>

      <View style={styles.numberView}>
        <TextInput
          placeholder="password"
          value={password}
          selectionColor={'grey'}
          onChangeText={(text: string) => {
            setUserPassword(text);
          }}
          style={styles.inputStyle}
        />
      </View>
      <CustomButton buttonTxt={'Login'} onPress={NavigateHome} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerHead: {
    marginTop: 120,
    marginHorizontal: 40,
  },
  mobileTxt: {
    fontWeight: '700',
    fontSize: 34,
    lineHeight: 51,
    color: 'black',
  },
  numberView: {
    marginTop: 32,
    marginHorizontal: 40,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden',
    borderColor: '#E8E6EA',
  },
  inputStyle: {
    borderColor: '#E8E6EA',
    height: 58,
    flex: 1,
    fontSize: 16,
    marginLeft: 20,
  },
});
