import React from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../components/Form/button';

import { Feather } from '@expo/vector-icons'

import logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { InputControl } from '../components/Form/inputControl';

interface ScreenNavigationProp {
	goBack: () => void;
}

const formSchema = yup.object({
	name: yup.string().required('Informe o seu nome completo.'),
	email: yup.string().email('Email inválido').required('Informe o email.'),
	password: yup.string().required('Informe a senha.')
})

type FormData = yup.InferType<typeof formSchema>;

export function SignUp() {
	const { handleSubmit, control, formState: { errors }  } = useForm<FormData>({
		resolver: yupResolver(formSchema)
	});

	const { goBack } =  useNavigation<ScreenNavigationProp>();

	const handleSignUp = (form: FormData) => {
			const data = {
				name: form.name,
				email: form.email,
				password: form.password,
			};

			console.log(data);
		};

	return (
		<KeyboardAvoidingView enabled style={{ flex: 1}} behavior={Platform.OS === 'ios'? 'padding' : undefined}>
			<ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
				<View className="flex-1 bg-dark">

					<View className="flex-1 items-center justify-center w-max p-6">

					<Image className="w-40 h-40 rounded-lg mb-8" source={logo} ></Image>

						<Text className="text-lg text-light mb-6">Crie sua conta</Text>

						<InputControl 
							autoCapitalize="words" 
							autoCorrect={false} 
							control={control} 
							name='name' 
							placeholder = 'Nome' 
							className="w-full mb-4 rounded-md px-4 py-5 bg-gray800 text-light"
							error={errors.name && errors.name.message}
						/>
						
						<InputControl 
							autoCapitalize="none" 
							autoCorrect={false} 
							control={control} 
							name="email" 
							placeholder="Email" 
							keyboardType='email-address'
							className="w-full mb-4 rounded-md px-4 py-5 bg-gray800 text-light"
							error={errors.email && errors.email.message}
						/>
						
						<InputControl 
							control={control} 
							name='password' 
							placeholder = 'Senha' 
							autoCorrect={false}
							secureTextEntry
							className="w-full mb-4 rounded-md px-4 py-5 bg-gray800 text-light"
							error={errors.password && errors.password.message}
						/>

						<Button titleStyles='' title={'Criar'} onPress={handleSubmit(handleSignUp)} className="w-full rounded-md"/>

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
