import React, { useState } from 'react';
import { Center, Heading, SectionList, Text, VStack } from 'native-base';
import ScreenHeader from '@components/ScreenHeader';
import HistoryCard from '@components/HistoryCard';

export default function History(){
    const [exercises, setExercises] = useState([
        {
            title: '02.11.2022',
            data: ['Puxada Frontal', 'Remada Unilateral'],
        },
        {
            title: '03.11.2022',
            data: ['Puxada Frontal'],
        },
    ]);

    return (
        <VStack flex={1}>
            <ScreenHeader title='Historico de exercicios' />

            <SectionList
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading color="gray.200" fontSize="md" mt={10} mb={3} fontFamily="heading">
                        {section.title}
                    </Heading>
                )}
                px={8}
                contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center'}}
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center">
                        Nao há exercicios registrados ainda.{`\n`}
                        Vamos fazer exercicios hoje?
                    </Text>
                )}
            />
        </VStack>
    );
}