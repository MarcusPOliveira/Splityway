import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

type Props = {
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 42px;
  margin-bottom: 50px;
`;

export const IconContainer = styled.View<Props>`
  width: 56px;
  height: 56px;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ isFocused, theme }) => isFocused && css`
    border-left-width: 3px;
    border-color: ${theme.colors.secondary};
  `};
`;

export const InputArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `};
`;

export const Input = styled(TextInput)`
  flex: 1;
  height: 56px;
  padding-left: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};;
`;

export const ButtonClear = styled.TouchableOpacity`
  margin-right: 7px;
`;

export const Button = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  margin-left: 7px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.success};;
`;