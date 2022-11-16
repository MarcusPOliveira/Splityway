import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { MapPin, Calendar, CheckCircle } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { NameInput } from '../../components/Forms/NameInput';
import { DateInput } from '../../components/Forms/DateInput';
import { StatusSpinner } from '../../components/Forms/StatusSpinner';
import { MainButton } from '../../components/MainButton';
import {
  Container,
  Content,
  Subtitle,
  Forms,
  InputLabel,
  Footer,
} from './styles';

export function NewGroup() {

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleNext() {
    navigation.navigate('addFriend');
  }

  return (
    <Container>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Header
          title='Novo grupo'
          onPress={handleGoBack}
        />
        <Content>
          <Subtitle>Informe os dados{'\n'}do grupo</Subtitle>
          <Forms>
            <InputLabel>Título ou nome do lugar</InputLabel>
            <NameInput
              placeholder='Ex: Pizzaria do Zé'
              iconName={MapPin}
              autoCorrect
              autoCapitalize='words'
              maxLength={20}
            />
            <InputLabel>Data</InputLabel>
            <DateInput
              placeholder='Ex: 22/08/22'
              iconName={Calendar}
              keyboardType='number-pad'
              maxLength={8}
            />
            <InputLabel>Status</InputLabel>
            <StatusSpinner
              iconName={CheckCircle}
              value='Em aberto'
            />
          </Forms>
        </Content>
        <Footer>
          <MainButton
            title="Adicionar participantes"
            onPress={handleNext}
          />
        </Footer>
      </KeyboardAvoidingView>
    </Container>
  );
}
