import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Heading, HStack, Image, Text, VStack, Icon } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';


type ExerciseCardProps = TouchableOpacityProps & {

}

export default function ExerciseCard({ ...rest }: ExerciseCardProps){
    return (
        <TouchableOpacity {...rest}>
            <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
                <Image 
                    source={{ uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'}}
                    alt="Homem fazendo remada unileteral"
                    w={16}
                    h={16}
                    rounded="md"
                    mr={4}
                    resizeMode="center"
                />
                <VStack flex={1}>
                    <Heading fontSize="lg" color="white" fontFamily="heading">Remada Unilateral</Heading>

                    <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>3 series x 12 repeticoes</Text>
                </VStack>

                <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
            </HStack>
        </TouchableOpacity>
    );
}