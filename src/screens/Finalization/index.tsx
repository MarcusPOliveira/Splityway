import React from 'react';
import { useNavigation } from '@react-navigation/native';

import DoneImg from '../../assets/done.png';
import { SecondaryButton } from '../../components/SecondaryButton';
import {
  Container,
  Content,
  Done,
  Title,
  Subtitle,
  Footer
} from './styles';

export function Finalization() {

  const navigation = useNavigation();

  function handleDone() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Content>
        <Done source={DoneImg} />
        <Title>Pizzaria do Zé</Title>
        <Subtitle>Grupo finalizado{'\n'}com sucesso!</Subtitle>
      </Content>
      <Footer>
        <SecondaryButton
          title='Ok'
          color='dark'
          onPress={handleDone}
        />
      </Footer>
    </Container>
  );
}
