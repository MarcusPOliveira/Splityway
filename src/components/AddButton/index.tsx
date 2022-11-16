import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Plus } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import {
  Button,
  Container
} from './styles';

type Props = RectButtonProps & {}

export function AddButton({ ...rest }: Props) {

  const { colors } = useTheme();

  return (
    <Container>
      <Button {...rest}>
        <Plus color={colors.white} size={40} weight='bold' />
      </Button>
    </Container>
  );
}
