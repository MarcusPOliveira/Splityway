import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Button,
  Title,
  ButtonColor
} from './styles';

type Props = RectButtonProps & {
  title: string;
  color: ButtonColor;
  isLoading?: boolean;
}

export function SecondaryButton({ title, color = 'primary', isLoading = false, ...rest }: Props) {

  const { colors } = useTheme();

  return (
    <Container
      type={color}
    >
      <Button {...rest}>
        <Title>
          {title}
        </Title>
      </Button>
    </Container>
  );
}
