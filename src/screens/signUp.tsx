import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Input } from '../components/Form/input';
import { Button } from '../components/Form/button';

export function SignUp() {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
      <View className="flex-1 bg-dark">

        <View className="flex-1 items-center justify-center w-max p-6">

          <Text className="text-lg text-light mb-6">Crie sua conta</Text>

          <Input placeholder = 'Nome' className="w-full mb-4 rounded-md px-4 py-5 bg-gray800 text-light"/>
          <Input placeholder = 'Email' className="w-full mb-4 rounded-md px-4 py-5 bg-gray800 text-light"/>
          <Input placeholder = 'Senha' className="w-full rounded-md px-4 py-5 bg-gray800 text-light"/>

          <Button title={'Criar'} className="w-full mt-6 rounded-md"/>

        </View>

      </View>
    </ScrollView>
  );
}
