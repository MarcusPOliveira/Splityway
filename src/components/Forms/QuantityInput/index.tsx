import React, { useState } from 'react';
import { ToastAndroid, TextInputProps } from 'react-native';
import { Plus, Minus } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Less,
  More,
  Result
} from './styles';

type Props = TextInputProps & {
  setInputQuantity: (value: number) => void;
  inputQuantity: number;
}

export function QuantityInput({ setInputQuantity, inputQuantity, ...rest }: Props) {

  const { colors } = useTheme();

  function handleRemove() {
    const result = inputQuantity - 1;
    if (result < 1) {
      ToastAndroid.show('A quantidade mínima não pode ser menor que 1', ToastAndroid.SHORT);
    } else {
      setInputQuantity(result);
    }
  }

  function handleAdd() {
    const result = inputQuantity + 1;
    setInputQuantity(result);
  }

  return (
    <Container {...rest}>
      <Less onPress={handleRemove} >
        <Minus size={24} color={colors.white} />
      </Less>
      <Result
        {...rest}
        editable={false}
        value={inputQuantity.toString()}
      />
      <More onPress={handleAdd}>
        <Plus size={24} color={colors.white} />
      </More>
    </Container>
  );
}