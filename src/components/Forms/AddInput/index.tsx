import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Plus, X, User } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import {
  Container,
  InputArea,
  Input,
  ButtonClear,
  Button,
  IconContainer
} from './styles';

type Props = TextInputProps & {
  onAdd: () => void;
  onClear: () => void;
}

export function AddInput({ onAdd, onClear, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const { colors } = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container>
      <InputArea>
        <IconContainer isFocused={isFocused} >
          <User
            color={colors.secondary}
            size={24}
          />
        </IconContainer>
        <Input
          placeholder='Nome do amigo...'
          isFocused={isFocused}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
        <ButtonClear onPress={onClear}>
          <X size={16} color={colors.text} />
        </ButtonClear>
      </InputArea>
      <Button onPress={onAdd}>
        <Plus size={40} color={colors.white} />
      </Button>
    </Container>
  );
}