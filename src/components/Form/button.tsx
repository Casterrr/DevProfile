import React from 'react';
import { Text, View, TouchableOpacity, Image, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    
}

export const Button: React.FunctionComponent<TouchableOpacityProps> = ({...otherProps}) => {
  return (
    <TouchableOpacity>
        <Text>Bota pressão!</Text>
    </TouchableOpacity>
  );
}
