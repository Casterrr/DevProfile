import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
// import { Home } from './src/screens/home';

import { NavigationContainer } from '@react-navigation/native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import * as SplashScreen from 'expo-splash-screen';
// import { SignIn } from './src/screens/signIn';
import { SignUp } from './src/screens/signUp';

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return null
  }

  else {
    SplashScreen.hideAsync()
  }


  return (
    <NavigationContainer>
      <SafeAreaView className="flex-1">
        {/* <Home /> */}
        {/* <SignIn /> */}
        <SignUp />
        <StatusBar style='light' translucent={false} ></StatusBar>
      </SafeAreaView>
    </NavigationContainer>
  );
}
