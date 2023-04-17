import React from 'react';
import { Text, View, TextInputProps } from 'react-native';

import { Control, Controller, FieldErrors, FieldValues, FieldError } from 'react-hook-form'
import { Input } from './input';

interface Props extends TextInputProps {
    control: Control;
    name: string;
    error: string | undefined;
    // error: FieldError | string | FieldErrors<FieldValues> | undefined;
}

export const InputControl: React.FunctionComponent<Props> = ({
    control,
    name,
    error,
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
        
        {error && <Text className='font-robotoRegular text-sm text-danger mb-4'>Este campo é obrigatório.</Text>}

    </View>
  );
}
