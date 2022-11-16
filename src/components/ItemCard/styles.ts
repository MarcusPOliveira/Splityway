import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: 236px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

export const ItemArea = styled.View`
  width: 100%;
  height: 40%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 7px 23px;
`;

export const TopWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ItemTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const DeleteButton = styled.TouchableOpacity`

`;

export const BottomWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Price = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const FriendsArea = styled.View`
  width: 100%;
  height: 60%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
`;

export const FriendWrapper = styled.View`
  width: 92px;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const Photo = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FriendName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
`;

export const Amount = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

