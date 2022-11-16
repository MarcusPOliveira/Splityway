import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 56px;
  margin-top: 8px;
  margin-bottom: 21px;
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

export const InputText = styled(TextInput) <Props>`
  flex: 1;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;