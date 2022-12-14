import React, { useCallback, useState } from 'react';
import { Center, Heading, ScrollView, Skeleton, Text, useToast, VStack } from 'native-base';
import ScreenHeader from '@components/ScreenHeader';
import UserPhoto from '@components/UserPhoto';
import { Alert, TouchableOpacity } from 'react-native';
import Input from '@components/Input';
import Button from '@components/Button';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const PHOTO_SIZE = 33;

export default function Profile(){
    const [photoIsLoading, setPhotoIsLoading] = useState(false);
    const [userPhoto, setUserPhoto] = useState('https://github.com/HTM1000.png');

    const toast = useToast(); 

    const handleUserPhotoSelect = useCallback( async () => {
        setPhotoIsLoading(true);

        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true,
            });
    
            if (photoSelected.cancelled){
                return;
            }

            if (photoSelected.uri) {
                const photoInfo = await FileSystem.getInfoAsync(photoSelected.uri)

                if (photoInfo.size && (photoInfo.size / 1024 / 1024) > 5) {
                    return toast.show({
                        title: 'Essa imagem é muito grande. Escolha uma de até 5MB',
                        placement: 'top',
                        bgColor: 'red.500'
                    })
                }

                setUserPhoto(photoSelected.uri);
            }
    
        } catch (e) {
            console.log(e)
        } finally {
            setPhotoIsLoading(false);
        }

    }, [])

    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil" />

            <ScrollView pb={20}>
                <Center mt={6} px={10}>
                    {
                        photoIsLoading ?
                            <Skeleton 
                                w={PHOTO_SIZE}
                                h={PHOTO_SIZE}
                                rounded="full"
                                startColor="gray.500"
                                endColor="gray.400"
                            />
                        :
                            <UserPhoto 
                                source={{ uri: 'https://github.com/HTM1000.png' }}
                                alt="Foto do usuário"
                                size={PHOTO_SIZE}
                            />
                    }

                    <TouchableOpacity onPress={handleUserPhotoSelect}>
                        <Text color="orange.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
                            Alterar Foto
                        </Text>
                    </TouchableOpacity>

                    <Input placeholder='Nome' bg="gray.600" />
                    <Input placeholder='rike_moraca@hotmail.com' bg="gray.600" isDisabled />
                </Center>

                <VStack px={10} mt={12} mb={9}>
                    <Heading color="gray.200" fontSize="md" mb={2} fontFamily="heading">Alterar Senha</Heading>

                    <Input bg="gray.600" placeholder="Senha antiga" secureTextEntry />
                    <Input bg="gray.600" placeholder="Nova senha" secureTextEntry />
                    <Input bg="gray.600" placeholder="Confirme a nova senha" secureTextEntry />

                    <Button title="Atualizar" mt={4} />
                </VStack>
            </ScrollView>
        </VStack>
    );
}