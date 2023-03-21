import React from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Input } from '../components/Form/input';
import { Button } from '../components/Form/button';

import { Feather } from '@expo/vector-icons'

import logo from '../assets/logo.png';

export function SignIn() {
  return (
    <>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
        <View className="flex-1 bg-dark">
      
          <View className="flex-1 items-center justify-center w-max p-6">
      
            <Image className="w-40 h-40 rounded-lg mb-8" source={logo} ></Image>
            <Text className="text-lg text-light mb-6">Faça seu login</Text>
      
            <Input placeholder = 'Email' className="w-full mb-4 rounded-md px-4 py-5 bg-gray800 text-light"/>
            <Input placeholder = 'Senha' className="w-full rounded-md px-4 py-5 bg-gray800 text-light"/>
      
            <Button title={'Entrar'} titleStyles={''} className="w-full mt-6 text-dark rounded-md"/>
      
            <Button title={'Esqueci minha senha'} titleStyles={'font-robotoRegular text-sm text-gray500'} className='bg-transparent rounded-full p-0 mt-6'/>
          
          </View>
      
        </View>
      </ScrollView>
    
      <TouchableOpacity className='absolute left-0 top-0 bg-gray800 border-t-2 border-black flex-row py-4 items-center justify-center mt-6'>
        <Feather name='log-out' size={28} color={'#eba417'} />
        <Text className='font-robotoRegular text-lg ml-4 text-primary'>Criar uma conta</Text>
      </TouchableOpacity>

    </>
  );
}
