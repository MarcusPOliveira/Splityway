import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { X, Plus } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { QuantityInput } from '../Forms/QuantityInput';
import {
  Container,
  ItemArea,
  TopWrapper,
  ItemTitle,
  DeleteButton,
  BottomWrapper,
  Price,
  FriendsArea,
  FriendWrapper,
  Photo,
  FriendName,
  Amount,
} from './styles';

type Props = {
  quantity: number;
  onInputQuantityChange: (value: number) => void;
  onAddFriend: () => void;
  onDeleteFriend: () => void;
}

export function ItemCard({ quantity, onInputQuantityChange, onAddFriend, onDeleteFriend }: Props) {
  const [friends, setFriends] = useState([]);

  const data = [
    {
      id: 1,
      name: 'Maria',
      amount: 'R$31,50'
    },
    {
      id: 2,
      name: 'João',
      amount: 'R$31,50'
    },
  ]

  const { colors } = useTheme();

  return (
    <Container>
      <ItemArea>
        <TopWrapper>
          <ItemTitle>Coca-Cola 2L</ItemTitle>
          <DeleteButton>
            <X size={24} color={colors.text} weight="bold" />
          </DeleteButton>
        </TopWrapper>
        <BottomWrapper>
          <QuantityInput
            setInputQuantity={onInputQuantityChange}
            inputQuantity={quantity}
          />
          <Price>R$12,00</Price>
        </BottomWrapper>
      </ItemArea>
      <FriendsArea>
        <FlatList
          data={data}
          horizontal
          renderItem={({ item }) => (
            <FriendWrapper>
              <Photo onPress={onDeleteFriend}>

              </Photo>
              <FriendName>{item.name}</FriendName>
              <Amount>R$31,50</Amount>
            </FriendWrapper>
          )}
          ListFooterComponent={
            <FriendWrapper>
              <Photo onPress={onAddFriend}>
                <Plus size={32} color={colors.text} />
              </Photo>
              <FriendName></FriendName>
              <Amount></Amount>
            </FriendWrapper>
          }
        />
      </FriendsArea>
    </Container>
  );
}
