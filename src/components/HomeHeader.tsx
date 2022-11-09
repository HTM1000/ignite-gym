import React from 'react';

import { Heading, HStack, Icon, Pressable, Text, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import UserPhoto from './UserPhoto';

export default function HomeHeader(){
    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
            <UserPhoto 
                source={{ uri: 'https://github.com/HTM1000.png' }} 
                size={16} 
                alt="Imagem do usuario" 
                mr={4} 
            />

            <VStack flex={1}>
                <Text color="gray.100" fontSize="md">Olá,</Text>
                <Heading color="gray.100" fontSize="md" fontFamily="heading">Henrique</Heading>
            </VStack>

            <Pressable>
                <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
            </Pressable>
        </HStack>
    );
}