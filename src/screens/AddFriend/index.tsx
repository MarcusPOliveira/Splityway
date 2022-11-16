import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { AddInput } from '../../components/Forms/AddInput';
import { FriendCard } from '../../components/FriendCard';
import { MainButton } from '../../components/MainButton';
import {
  Container,
  Content,
  Subtitle,
  Instruction,
  FriendsList,
  Footer
} from './styles';

export function AddFriend() {

  const navigation = useNavigation();

  function handleNext() {
    navigation.navigate('expenses');
  }

  function handleClear() {

  }

  async function handleAddFriend() {

  }

  return (
    <Container>
      <Header title='Pizzaria do Zé' />
      <Content>
        <Subtitle>Adicionar participantes{'\n'}ao grupo</Subtitle>
        <AddInput
          onClear={handleClear}
          onAdd={handleAddFriend}
        />
        <Subtitle>Todos os participantes</Subtitle>
        <Instruction>(arraste para remover)</Instruction>
        <FriendsList>
          <FriendCard
            name='Maria'
            isDeletable
          />
        </FriendsList>
      </Content>
      <Footer>
        <MainButton
          title='Continuar'
          onPress={handleNext}
        />
      </Footer>
    </Container>
  );
}
