import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export type ButtonColor = 'primary' | 'secondary' | 'dark';

type ContainerProps = {
  type: ButtonColor;
}

export const Container = styled.View<ContainerProps>`
  width: 45%;
  height: 56px;
  border-radius: 10px;
  ${({ type, theme }) => type === 'primary' && css`
    background-color: ${theme.colors.success};
  `};
  ${({ type, theme }) => type === 'secondary' && css`
    background-color: ${theme.colors.secondary};
  `};
  ${({ type, theme }) => type === 'dark' && css`
    background-color: ${theme.colors.dark_700};
  `};
`;

export const Button = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
