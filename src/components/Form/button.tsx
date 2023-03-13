import React from 'react';
import { Text, View, TouchableOpacity, Image, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ title, ...otherProps }) => {
  return (
    <TouchableOpacity {...otherProps} className="w-max items-center bg-primary p-5 mt-4">
        <Text className="font-robotoBold text-sm text-dark" > {title} </Text>
    </TouchableOpacity>
  );
}
