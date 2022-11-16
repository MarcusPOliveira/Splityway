import React from 'react';
import { Header } from '../../components/Header';
import { MainButton } from '../../components/MainButton';
import { ResumeCard } from '../../components/ResumeCard';

import {
  Container,
  Content,
  Footer,
} from './styles';

export function Payment() {

  function handleDone() {

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
