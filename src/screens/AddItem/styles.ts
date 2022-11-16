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
  padding: 10px 25px;
  flex: 0.9;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 37px;
`;

export const Forms = styled.View`
`;

export const InputLabel = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
`;

export const Footer = styled.View`
  flex: 0.1;
  padding: 20px 25px;
`;
