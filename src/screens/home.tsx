import React from 'react';
import { Text, View } from 'react-native';
import { Header } from '../components/header';

export function Home() {
  return (
    <View className="flex-1 bg-dark">
      <Header />
    </View>
  );
}
