import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-dark">
      <Text className='font-Roboto-regular text-4xl text-white'>Hello <Text className='text-primaryLight'>World!</Text></Text>
      <StatusBar style="light" hidden={false} translucent={false}/>
    </View>
  );
}
