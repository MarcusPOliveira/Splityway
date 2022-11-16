import React, { useState, useContext } from 'react';
import { TextInputProps } from 'react-native';
import { IconProps } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import {
  Container,
  IconContainer,
  InputText,
} from './styles';

type Props = TextInputProps & {
  iconName?: React.ElementType<IconProps>;
  value?: string;
}

export function NameInput({ iconName: Icon, value, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { colors } = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused} >
        <Icon
          color={colors.secondary}
          size={32}
        />
      </IconContainer>
      <InputText
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        {...rest}
      />
    </Container>
  );
}