import React from 'react';
import { Text, View, TouchableOpacity, Image, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    titleStyles: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ title, titleStyles, ...otherProps }) => {
  return (
    <TouchableOpacity {...otherProps} className="w-max items-center bg-primary p-5 mt-4">
        <Text className={`font-robotoBold text-sm ${titleStyles}`} > {title} </Text>
    </TouchableOpacity>
  );
}
