import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { MapPin, Calendar, CheckCircle } from 'phosphor-react-native';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

import { groupCreate } from '../../storage/group/groupCreate';
import { GroupDTO } from '../../DTOs/GroupDTO';
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
  const [name, setName] = useState('');
  const [date, setDate] = useState('26/11/22');
  const [status, setStatus] = useState('Em aberto');

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleNext() {
    const data = { id: JSON.stringify(uuid.v4()), name, date, status };
    console.log("Dados: ", data)
    const newGroup = await groupCreate(data);
    console.log("AsyncStorage: ", newGroup)
    navigation.navigate('addFriend', { data });
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
              value={name}
              onChangeText={setName}
            />
            <InputLabel>Data</InputLabel>
            <DateInput
              placeholder='Ex: 22/08/22'
              iconName={Calendar}
              keyboardType='number-pad'
              maxLength={8}
              value={date}
              onChangeText={setDate}
            />
            <InputLabel>Status</InputLabel>
            <StatusSpinner
              iconName={CheckCircle}
              value={status}
              onChangeText={setStatus}
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
