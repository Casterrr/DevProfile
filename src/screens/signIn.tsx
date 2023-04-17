import React from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// import { Input } from '../components/Form/input';
import { Button } from '../components/Form/button';

import { useNavigation } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'

import logo from '../assets/logo.png';
import { InputControl } from '../components/Form/inputControl';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

const formSchema = yup.object({
	email: yup.string().email('Email inválido').required('Informe o email.'),
	password: yup.string().required('Informe a senha.')
})

type FormData = yup.InferType<typeof formSchema>;

export function SignIn() {
	const { handleSubmit, control, formState: { errors } } = useForm<FormData>({
		resolver: yupResolver(formSchema)
	});

	const navigation =  useNavigation<ScreenNavigationProp>();

	const handleSignIn = (form: FormData) => {
		const data = {
			email: form.email,
			password: form.password,
		};

		console.log(data);
	};

	return (
	<KeyboardAvoidingView enabled style={{ flex: 1}} behavior={Platform.OS === 'ios'? 'padding' : undefined}>
		<ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }}>
		<View className="flex-1 bg-dark">
		
			<View className="flex-1 items-center justify-center w-max p-6">

			<Image className="w-40 h-40 rounded-lg mb-8" source={logo} ></Image>
			<View>
				<Text className="text-lg text-light mb-6">Faça seu login</Text>
			</View>
		
			<InputControl 
				autoCapitalize="none" 
				autoCorrect={false} 
				control={control} 
				name="email" 
				placeholder="Email" 
				className="mb-4 rounded-md px-4 py-5 bg-gray800 text-light"
				keyboardType="email-address"
				error={errors.email && errors.email.message}
			/>

			<InputControl 
				autoCapitalize="none" 
				autoCorrect={false} 
				control={control} 
				name="password" 
				placeholder = "Senha" 
				className="rounded-md px-4 py-5 bg-gray800 text-light"
				secureTextEntry
				error={errors.password && errors.password.message}
			/>
		
			<Button title={"Entrar"} titleStyles={""} onPress={handleSubmit(handleSignIn)} className="w-full mt-6 text-dark rounded-md"/>
		
			<Button title={"Esqueci minha senha"} titleStyles={"font-robotoRegular text-sm text-gray500"} className="bg-transparent rounded-full p-0 mt-6"/>
			
			</View>
		
		</View>
		</ScrollView>

		<TouchableOpacity onPress={() => {navigation.navigate('SignUp')}} className="absolute left-0 right-0 bottom-0 bg-gray800 border-t-2 border-black flex-row py-4 items-center justify-center mt-6">
			<Feather name="log-in" size={28} color={"#eba417"} />
			<Text className="font-robotoRegular text-lg ml-4 text-primary">Criar uma conta</Text>
		</TouchableOpacity>

	</KeyboardAvoidingView>
	);
}
