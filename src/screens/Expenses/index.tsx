import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { Header } from '../../components/Header';
import { ItemCard } from '../../components/ItemCard';
import { SecondaryButton } from '../../components/SecondaryButton';
import {
  Container,
  Content,
  AmountWrapper,
  Spent,
  Amount,
  ItemsList,
  Footer,
} from './styles';

export function Expenses() {
  const [quantity, setQuantity] = useState(1);

  const navigation = useNavigation();

  function handleInputQuantityChange(value: number) {
    setQuantity(value);
  }

  function handleAddFriend() {

  }

  function handleDeleteFriend() {

  }

  function handleAddNewItem() {
    navigation.navigate('addItem');
  }

  function handlePayment() {
    navigation.navigate('payment');
  }

  return (
    <Container>
      <Header title='Pizzaria do Zé' />
      <Content>
        <AmountWrapper>
          <Spent>Total gasto: </Spent>
          <Amount>R$75,00</Amount>
        </AmountWrapper>
        <ItemsList>
          <ItemCard
            quantity={quantity}
            onInputQuantityChange={handleInputQuantityChange}
            onAddFriend={handleAddFriend}
            onDeleteFriend={handleDeleteFriend}
          />
        </ItemsList>
      </Content>
      <Footer>
        <SecondaryButton
          title='Adicionar item'
          color='secondary'
          onPress={handleAddNewItem}
        />
        <SecondaryButton
          title='Pagamento'
          color='primary'
          onPress={handlePayment}
        />
      </Footer>
    </Container>
  );
}
