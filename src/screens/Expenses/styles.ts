import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
  start: { x: 0.0, y: 0.4 },
  end: { x: 0, y: 1.3 },
}))`
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  padding: 0px 25px;
  flex: 0.8;
`;

export const AmountWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Spent = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
`;

export const Amount = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const ItemsList = styled.View`
  width: 100%;
`;

export const Footer = styled.View`
  flex: 0.1;
  flex-direction: row;
  padding: 20px 20px;
  justify-content: space-around;
  align-items: center;
`;
