import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/signIn';
import { SignUp } from '../screens/signUp';

const Auth = createNativeStackNavigator();
export const AuthRoutes: React.FunctionComponent = () => {
    return (
        <Auth.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
            <Auth.Screen name="SignIn" component={SignIn} />
            <Auth.Screen name="SignUp" component={SignUp} />
        </Auth.Navigator>
    )
}