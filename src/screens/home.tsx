import React from 'react';
import { Text, View } from 'react-native';
import { Header } from '../components/header';
import { Input } from '../components/input';

export function Home() {
  return (
    <View className="flex-1 bg-dark">
      <Header />
      <Input />
    </View>
  );
}
