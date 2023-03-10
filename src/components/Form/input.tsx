import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

export const Input: React.FunctionComponent<TextInputProps> = ({...otherProps}) => {
  return (
    <TextInput {...otherProps} placeholderTextColor={'#a8a8b3'} className="w-max text-lg px-2 py-6 min-h-fit bg-gray-500 text-white items-center justify-between flex-row">
      
    </TextInput>
  );
}
