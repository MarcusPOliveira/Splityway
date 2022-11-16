import React from 'react';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

import { MainButton } from '../../components/MainButton';
import { ResumeCard } from '../../components/ResumeCard';
import {
  Container,
  Content,
  Footer,
} from './styles';

export function Payment() {

  const navigation = useNavigation();

  function handleDone() {
    navigation.navigate('finalization');
  }

  return (
    <Container>
      <Header
        title='Pizzaria do Zé'
      />
      <Content>
        <ResumeCard
          isPaid
        />
      </Content>
      <Footer>
        <MainButton
          title='Finalizar'
          onPress={handleDone}
        />
      </Footer>
    </Container>
  );
}
