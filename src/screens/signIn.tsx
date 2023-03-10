import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Header } from '../components/header';
import { Input } from '../components/Form/input';

export function SignIn() {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
      <View className="flex-1 bg-dark">
        <View className="flex-1 items-center justify-center w-max p-6">
          <Text className="text-lg text-light mb-6">Faça seu login</Text>
          <Input placeholder = 'Email' className="w-full mb-4 rounded-md px-4 py-5 bg-gray800 text-light"/>
          <Input placeholder = 'Senha' className="w-full rounded-md px-4 py-5 bg-gray800 text-light"/>
        </View>
      </View>
    </ScrollView>
  );
}
