import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

//Custom Components
import Styles from '../asset/Styles'
import Colors from '../asset/Colors'
import Font from '../asset/Font'
import CustomAlert from '../components/CustomAlert'


const Login = ({ navigation }) => {

  const [onFocusUser, setOnFocusUser] = useState(false)
  const [onFocusPassword, setOnFocusPassword] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [userCredential, setUserCredential] = useState('')
  const [validateUser, setValidateUser] = useState(false)
  const [userPassword, setUserPassword] = useState('')
  const [passwordValidete, setPasswordValidate] = useState(false)

  const route = useRoute()

  const onSubmitFunction = () => {
    setValidateUser(false)
    setPasswordValidate(false)

    const emailRegexp = new RegExp(/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i)
    const phoneValidation = /^\d{10}$/;
    const passwordValidation = /^[a-zA-Z0-9]+$/;

    if ((!emailRegexp.test(userCredential) || userCredential.length < 6) && (!phoneValidation.test(userCredential) || userCredential.length != 10)) {
      setValidateUser(true)
    }
    else if(passwordValidation.test(userPassword) || userPassword.length < 8){
      setPasswordValidate(true)
    }
    else {
      setUserCredential('')
      setUserPassword('')
      navigation.navigate('Home')
    }
  }

  const exitAppFunction = () => {
    setShowAlert(!showAlert)
    console.log("Exit Function called")
    if (route.name == 'Login') {
      BackHandler.removeEventListener()
      BackHandler.exitApp()
      return true
    }
    return false
  }

  useEffect(() => {
    const backButtonFunction = () => {
      setShowAlert(!showAlert)
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backButtonFunction)
    return () => backHandler.remove()
  }, [])


  return (
    <NativeBaseProvider>
      <View style={Styles.container}>
        <CustomAlert
          visible={showAlert}
          tiltle={'Exit App'}
          messsageText={Colors.black}
          message={"Are you sure, you want to exit this app?"}
          positiveTextColor={Colors.black}
          negativeTextColor={Colors.black}
          negativeButton={"No"}
          negativeButtonColor={Colors.danger}
          negativeBorderColor={Colors.primaryColour}
          negativeBorderWidth={1}
          positiveButton={"Yes"}
          onNegativeButtonPress={() => setShowAlert(false)}
          onNPositiveButtonPress={() => exitAppFunction()}
        />
        <ScrollView>
          <View style={[Styles.innerContainer, { marginTop: "15%" }]}>
            <Image source={require('../asset/image/icon_Splash.png')} style={Styles.logoInitial} />
            <Text style={[Styles.textCopyrights, { color: Colors.primaryColour, fontSize: Font.MAIN_HEADER, width: "70%" }]}>Welcome to Cloud!</Text>
            <Text style={[Styles.textCopyrights, { marginTop: 10, fontSize: Font.NORMAL_FONT_SIZE, fontWeight: "600" }]}>Lorem ipsum doller sit amet Lorem ipsum doler</Text>

          </View>
          <View style={[Styles.innerContainer, { justifyContent: "flex-start", alignItems: "flex-start" }]}>
            <View style={Styles.loginContainer}>
              <TouchableOpacity style={{ width: "100%" }} onPress={() => onSubmitFunction()}>
                <Text style={[Styles.textCopyrights, { color: Colors.primaryColour, fontSize: Font.MAIN_HEADER, }]}>
                  Login to continue
                </Text>
              </TouchableOpacity>

              <View>
                {onFocusUser ?
                  <Text style={[Styles.labels, { color: Colors.primaryColour }]}>
                    Email / Phone
                  </Text> : null}

                <TextInput
                  style={Styles.textInput}
                  placeholderTextColor={Colors.grey}
                  onFocus={() => setOnFocusUser({ onFocusUser: true })}
                  onBlur={() => setOnFocusPassword({ onFocusUser: false })}
                  placeholder={onFocusUser ? '' : 'Enter email or phone'}
                  onChangeText={(value) => setUserCredential(value)}
                />
                {validateUser == true ? <Text style={Styles.validationLabel}>Enter valid email or phone number</Text>
                  : null}

              </View>

              <View>
                {onFocusPassword ?
                  <Text style={[Styles.labels, { color: onFocusPassword ? Colors.primaryColour : Colors.black }]}>
                    Password
                  </Text> : null}

                <TextInput
                  style={Styles.textInput}
                  placeholderTextColor={Colors.grey}
                  onFocus={() => setOnFocusPassword({ onFocusPassword: true })}
                  onBlur={() => setOnFocusPassword({ onFocusPassword: false })}
                  onPressOut={() => setOnFocusPassword({ onFocusPassword: false })}
                  placeholder={onFocusPassword ? '' : 'Password'}
                  secureTextEntry={true}
                  onChangeText={(value) => setUserPassword(value)}
                />
                {passwordValidete == true ? <Text style={Styles.validationLabel}>Enter correct password and password must be alphanumeric with any symbol</Text>
                  : null}
              </View>
            </View>
          </View>

          <View style={[Styles.innerContainer, { marginTop: "40%" }]}>
            <Image source={require('../asset/image/google.png')} style={[Styles.logoInitial, { width: 60, height: 60 }]} />
            <Text style={Styles.textCopyrights}>Copyright Stream LLC 2022 All rights reserved</Text>
          </View>
        </ScrollView>

      </View>
    </NativeBaseProvider>
  )
}

export default Login

const styles = StyleSheet.create({})