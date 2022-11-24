import { ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'

import Colors from './asset/Colors'
import Styles from './asset/Styles'

const SplashScreen = ({ navigation }) => {

    const route = useRoute()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000)
    })
    return (
        <View style={Styles.container}>
            <View style={Styles.innerContainer}>
                <Image source={require('./asset/image/icon_Splash.png')} style={Styles.logoInitial} />
            </View>
            <View style={[Styles.innerContainer,{marginTop:"30%"}]}>
                <Image source={require('./asset/image/google.png')} style={[Styles.logoInitial,{width:60,height:60}]} />
                <Text style={Styles.textCopyrights}>Copyright Stream LLC 2022 All rights reserved</Text>
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})