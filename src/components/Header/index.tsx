import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { CaretLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import {
  Container,
  BackButton,
  Title
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function Header({ title, ...rest }: Props) {

  const { colors } = useTheme();

  return (
    <Container>
      <BackButton {...rest}>
        <CaretLeft color={colors.white} size={32} weight='bold' />
      </BackButton>
      <Title> {title} </Title>
    </Container>
  );
}
