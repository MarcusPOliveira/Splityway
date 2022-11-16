import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { AddButton } from '../../components/AddButton';
import { GroupCard } from '../../components/GroupCard';
import {
  Container,
  Header,
  ProfilePhoto,
  WelcomeWrapper,
  HelloWrapper,
  Greetings,
  Username,
  Content,
  Title,
  Footer,
} from './styles';

export function Home() {

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('newGroup');
  }

  return (
    <Container>
      <Header>
        <ProfilePhoto source={{ uri: 'https://avatars.githubusercontent.com/u/47436367?v=4' }} />
        <WelcomeWrapper>
          <HelloWrapper>
            <Greetings>Olá </Greetings>
            <Username>Marcus</Username>
          </HelloWrapper>
          <Greetings>Bem vindo de volta!</Greetings>
        </WelcomeWrapper>
      </Header>
      <Content>
        <Title>Grupos recentes</Title>
        <GroupCard />
      </Content>
      <Footer>
        <AddButton onPress={handleNewGroup} />
      </Footer>
    </Container>
  );
}
