import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: 22%;
  flex-direction: row;
`;

export const InfoCard = styled.View`
  width: 85%;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  justify-content: space-between;
  padding: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const LocationTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;

export const Footer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: space-around;
`;

export const Amount = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const Status = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;

export const ButtonWrapper = styled.View`
  width: 15%;
  background-color: ${({ theme }) => theme.colors.success};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
`;

export const Button = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

