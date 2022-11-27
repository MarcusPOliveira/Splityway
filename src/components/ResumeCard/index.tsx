import React, { useState } from 'react';
import { FlatList, TouchableOpacityProps } from 'react-native';

import PaymentResume from '../../assets/payment_resume.png';
import {
  Container,
  Title,
  PaymentImg,
  AmountWrapper,
  Spent,
  Amount,
  FriendWrapper,
  Name,
  Separator,
} from './styles';

type Props = TouchableOpacityProps & {
  isPaid: boolean;
}

export function ResumeCard({ isPaid = false, ...rest }: Props) {
  const [paid, setPaid] = useState(false);

  const Friends = [
    {
      name: 'Maria',
      amount: 'R$35,50'
    },
    {
      name: 'João',
      amount: 'R$35,50'
    },
    {
      name: 'Pedro',
      amount: 'R$4,00'
    }
  ]

  function handleIsPaid() {
    const payment = setPaid((prevState) => !prevState);
    return payment;
  }

  return (
    <Container>
      <Title>Resumo da conta</Title>
      <PaymentImg
        source={PaymentResume}
        resizeMode="contain"
      />
      <AmountWrapper>
        <Spent>Total gasto: </Spent>
        <Amount>R$75,00</Amount>
      </AmountWrapper>
      <Spent>Total por participante</Spent>
      <FlatList
        data={Friends}
        style={{ width: '100%', marginTop: 20 }}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <FriendWrapper
            onPress={handleIsPaid}
            {...rest}
          >
            <Name>{item.name}</Name>
            <Amount>{item.amount}</Amount>
          </FriendWrapper>
        )}
        ListFooterComponent={() => <Separator />}
      />
    </Container>
  );
}
