import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Barcode, Coins } from 'phosphor-react-native';

import { Header } from '../../components/Header';
import { MainButton } from '../../components/MainButton';
import {
  Container,
  Content,
  Subtitle,
  Forms,
  InputLabel,
  Footer,
} from './styles';
import { NameInput } from '../../components/Forms/NameInput';
import { DateInput } from '../../components/Forms/DateInput';
import { QuantityInput } from '../../components/Forms/QuantityInput';
import { useNavigation } from '@react-navigation/native';

type Props = {

}

export function AddItem({ }: Props) {
  const [quantity, setQuantity] = useState(1);

  const navigation = useNavigation();

  function handleInputQuantityChange(value: number) {
    setQuantity(value);
  }

  function handleAddItem() {
    navigation.navigate('expenses');
  }

  return (
    <Container>
      <Header
        title='Pizzaria do Zé'
      />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <Subtitle>Adicione um item{'\n'}consumido</Subtitle>
          <Forms>
            <InputLabel>Nome</InputLabel>
            <NameInput
              placeholder='Ex: Coca-Cola 2L'
              iconName={Barcode}
              autoCorrect
              autoCapitalize='words'
              maxLength={20}
            />
            <InputLabel>Preço</InputLabel>
            <DateInput
              placeholder='Ex: R$12,00'
              iconName={Coins}
              keyboardType='number-pad'
            />
            <InputLabel>Quantidade</InputLabel>
            <QuantityInput
              setInputQuantity={handleInputQuantityChange}
              inputQuantity={quantity}
            />
          </Forms>
        </Content>
        <Footer>
          <MainButton
            title='Adicionar'
            onPress={handleAddItem}
          />
        </Footer>
      </KeyboardAvoidingView>
    </Container>
  );
}
