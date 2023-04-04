import React from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Input } from '../components/Form/input';
import { Button } from '../components/Form/button';

import { Feather } from '@expo/vector-icons'

import logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProp {
  goBack: () => void;
}

export function SignUp() {

  const { goBack } =  useNavigation<ScreenNavigationProp>();

  return (
    <KeyboardAvoidingView enabled style={{ flex: 1}} behavior={Platform.OS === 'ios'? 'padding' : undefined}>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
        <View className="flex-1 bg-dark">

          <View className="flex-1 items-center justify-center w-max p-6">

          <Image className="w-40 h-40 rounded-lg mb-8" source={logo} ></Image>

            <Text className="text-lg text-light mb-6">Crie sua conta</Text>

            <Input placeholder = 'Nome' className="w-full mb-4 rounded-md px-4 py-5 bg-gray800 text-light"/>
            <Input placeholder = 'Email' className="w-full mb-4 rounded-md px-4 py-5 bg-gray800 text-light"/>
            <Input placeholder = 'Senha' className="w-full rounded-md px-4 py-5 bg-gray800 text-light"/>

            <Button titleStyles='' title={'Criar'} className="w-full mt-6 rounded-md"/>

          </View>

        </View>
      </ScrollView>

      <TouchableOpacity onPress={() => goBack()} className='absolute left-0 right-0 bottom-0 bg-gray800 border-t-2 border-black flex-row py-4 items-center justify-center mt-6'>
        <Feather name='arrow-left' size={28} color={'#eba417'} />
        <Text className='font-robotoRegular text-lg ml-4 text-primary'>Voltar ao SignIn</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}
