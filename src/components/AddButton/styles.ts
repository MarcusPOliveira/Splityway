import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.success};
`;

export const Button = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
