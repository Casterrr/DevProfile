import React from 'react';
import { View, TextInputProps } from 'react-native';

import { Control, Controller } from 'react-hook-form'
import { Input } from './input';

interface Props extends TextInputProps {
    control: Control;
    name: string;
}

export const InputControl: React.FunctionComponent<Props> = ({
    control,
    name,
    ...otherProps
}) => {
  return (
    <View className='w-full'>
        <Controller
            control={control}
            rules={{
            maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input value={value} onChangeText={onChange} {...otherProps}/>
            )}
            name={name}
        />
    </View>
  );
}
