import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type ButtonProps = {
  isPaid?: boolean;
}

export const Container = styled.View`
  flex: 0.9;
  border-radius: 20px;
  padding: 22px 25px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const PaymentImg = styled.Image`
  width: 150px;
  height: 150px;
  align-self: center;
`;

export const AmountWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Spent = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const Amount = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const FriendWrapper = styled.TouchableOpacity<ButtonProps>`
  height: 46px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${({ isPaid, theme }) => isPaid && css`
    background-color: ${theme.colors.shape};
  `}
`;

export const Name = styled.Text<ButtonProps>`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  ${({ isPaid }) => isPaid && css`
    text-decoration-line: line-through;
  `}
`;

export const Separator = styled.View<ButtonProps>`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.shape};
  ${({ isPaid }) => isPaid && css`
    text-decoration-line: line-through;
  `}
`;
