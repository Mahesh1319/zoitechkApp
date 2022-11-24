import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

//Custom Component
import Login from './main/Login';
import SplashScreen from './SplashScreen'
import Home from './main/Home'
import Colors from './asset/Colors';
import Font from './asset/Font';



const Stack = createStackNavigator()
config = {
    animation :'spring',
    config:{
        stiffness:500,
        damping:100,
        mass:3,
        overshootClamping:false,
        restDisplacementThreshold:0.05,
        restSpeedThreshold:0.05,
    }
}
export default function NavigationScreen() {
    return (

        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={
                {
                    gestureDirection:"horizontal",
                    gestureEnabled:true,
                    transitionSpec:{
                        open:config,
                        close:config
                    },
                    cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
                }
            }
            initialRouteName='SplashScreen'>
                <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ title: 'SplashScreen', headerShown: false }} />

                <Stack.Screen name='Login' component={Login}
                    options={{ title: 'Login', headerShown: false, headerTitleStyle: { fontWeight: "bold", fontSize: Font.TITLE }, headerStyle: { backgroundColor: Colors.primaryColour } }} />

                <Stack.Screen name='Home' component={Home}
                    options={{title:'Home',headerShown:false, headerTitleStyle: { fontWeight: "bold", fontSize: 24 }, headerStyle: { backgroundColor: Colors.primaryColour }, headerRight: props => <Image {...props} /> }} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}


