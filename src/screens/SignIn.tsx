import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import Input from '@components/Input';
import Button from '@components/Button';
import { Controller, useForm } from 'react-hook-form';

export default function SignIn(){
    const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

    const handleNewAccount = useCallback(() => {
        navigate('SignUp');
    }, [])

    const { control } = useForm();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10} pb={16}>
                <Image 
                    source={BackgroundImg} 
                    defaultSource={BackgroundImg}
                    alt="Pessoas treinando em uma bicicleta" 
                    resizeMode="contain" 
                    position="absolute" 
                />

                <Center my={24}>
                    <LogoSvg />

                    <Text color="gray.100" fontSize="sm">Treine sua mente e seu corpo</Text>
                </Center>

                <Center>
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                        Acesse sua conta
                    </Heading>

                    <Controller 
                        control={control} 
                        name="email" 
                        render={({ field: {onChange, value} }) => (
                            <Input placeholder='E-mail' keyboardType='email-address' autoCapitalize='none' onChangeText={onChange} value={value} />
                        )} 
                    />

                    <Controller 
                        control={control} 
                        name="password" 
                        render={({ field: {onChange, value} }) => (
                            <Input placeholder='Senha' secureTextEntry onChangeText={onChange} value={value} />
                        )} 
                    />

                    <Button title='Acessar' />
                </Center>

                <Center mt={24}>
                    <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
                        Ainda nao possui acesso?
                    </Text>

                    <Button title='Criar Conta' variant="outline" onPress={handleNewAccount} />
                </Center>
            
            </VStack>
        </ScrollView>
    );
}