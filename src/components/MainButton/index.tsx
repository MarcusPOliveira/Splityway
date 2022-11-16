import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Button,
  Title,
} from './styles';

type Props = RectButtonProps & {
  title: string;
}

export function MainButton({ title, ...rest }: Props) {
  return (
    <Container>
      <Button {...rest}>
        <Title>
          {title}
        </Title>
      </Button>
    </Container>
  );
}
