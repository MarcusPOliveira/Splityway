import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
  start: { x: 0.0, y: 0.4 },
  end: { x: 0, y: 1.3 },
}))`
  flex: 1;
`;

export const Header = styled.View`
  flex: 0.04;
  flex-direction: row;
  padding: ${getStatusBarHeight() + 42}px 28px;
`;

export const ProfilePhoto = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const WelcomeWrapper = styled.View`
  margin-left: 20px;
`;

export const HelloWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Greetings = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
`;

export const Username = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  flex: 0.9;
  padding: 18px 25px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
`;

export const Footer = styled.View`
  flex: 0.15;
  padding: 10px 25px;
  align-items: flex-end;
`;
