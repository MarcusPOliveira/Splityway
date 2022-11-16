import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { X } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import {
  Button,
  Container,
  Name,
  DeleteButton,
} from './styles';

type Props = RectButtonProps & TouchableOpacityProps & {
  name: string;
  isSelected?: boolean;
  isDeletable?: boolean;
  onDelete?: () => void;
}

export function FriendCard({ name, isSelected = false, isDeletable = false, onDelete, ...rest }: Props) {

  const { colors } = useTheme();

  return (
    <Container isSelected={isSelected} >
      <Button
        style={{ width: isDeletable ? '80%' : '100%' }}
        {...rest}
      >
        <Name>{name}</Name>
      </Button>
      {
        isDeletable &&
        <DeleteButton onPress={onDelete}>
          <X size={28} color={colors.alert} weight="bold" />
        </DeleteButton>
      }
    </Container>
  );
}
