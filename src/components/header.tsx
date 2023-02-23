import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'

import avatarDefault from '../assets/avatar02.png';

export function Header() {
  return (
    <View className="w-max pb-6 pt-6 min-h-fit bg-secondary items-center justify-between flex-row">
      <View className="w-max px-6 flex-row items-center">
          <TouchableOpacity onPress={() => {}}>
            <Image className="w-14 h-14 rounded-lg" source={avatarDefault} ></Image>
          </TouchableOpacity>
          <View className="ml-4">
            <Text className='text-gray800'>Olá,</Text>
            <Text className='text-gray800 font-robotoBold'>Lucas</Text>
          </View>
      </View>
      
      <TouchableOpacity className='pr-6'>
        <Feather name='log-out' size={28} />
      </TouchableOpacity>
    </View>
  );
}
