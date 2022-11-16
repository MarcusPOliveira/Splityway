import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
  start: { x: 0.0, y: 0.4 },
  end: { x: 0, y: 1.3 },
}))`
  flex: 1;
`;

export const Content = styled.View`
  flex: 0.8;
  padding: 10px 25px;
`;

export const Footer = styled.View`
  flex: 0.1;
  padding: 10px 25px;
`;
