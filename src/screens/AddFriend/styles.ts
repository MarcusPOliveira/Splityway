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
  flex: 0.8;
  align-items: center;
  padding: 0px 25px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const Instruction = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  margin-top: 5px;
`;

export const FriendsList = styled.View`
  width: 100%;
`;

export const Footer = styled.View`
  flex: 0.1;
  padding: 20px 25px;
`;
