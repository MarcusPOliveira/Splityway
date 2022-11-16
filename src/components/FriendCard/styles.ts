import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

type BorderStyle = {
  isSelected: boolean;
}

export const Container = styled.View<BorderStyle>`
  width: 100%;
  height: 77px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ isSelected }) => isSelected && css`
    border-color: ${({ theme }) => theme.colors.success};
    border-width: 2px;
  `}
`;

export const Button = styled(RectButton)`
  width: 80%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  margin-left: 20px;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 20%;
  align-items: center;
  justify-content: center;
`;
