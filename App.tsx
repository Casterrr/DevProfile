import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Home } from './src/screens/home';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import * as SplashScreen from 'expo-splash-screen';

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
    <SafeAreaView className="flex-1">
      <Home />
      <StatusBar style='light' translucent={false} ></StatusBar>
    </SafeAreaView>
  );
}
