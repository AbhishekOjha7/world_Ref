import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { normalize } from '../../utils/dimensions'
import CustomButton from '../../components/customButton'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation=useNavigation<any>();
    const NavigateHome=()=>{
     navigation.navigate('BottomTabNavigator')
    }
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.innerHead}>
       <Text style={styles.mobileTxt}>{'My mobile'}</Text>
        <Text style={styles.digitTxt}>
          {
            'Please enter your valid phone number. We will send you a 4-digit code to verify your account. '
          }
        </Text>
       </View>

      <View style={styles.numberView}>

        <TextInput
          placeholder="Number"
          keyboardType="numeric"
          maxLength={10}
          selectionColor={'grey'}
          style={styles.inputStyle}
        />
      </View>
      <CustomButton buttonTxt={'Login'} onPress={NavigateHome}/>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    innerHead:{
        marginTop:120,
        marginHorizontal:40,
    },
    mobileTxt: {
        fontWeight: '700',
        fontSize: 34,
        lineHeight: 51,
        color: 'black',
      },
      digitTxt: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
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
})