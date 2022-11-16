import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 103px;
  border-radius: 12px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.shape};
`;

export const Less = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.alert};
  width: 36px;
  height: 36px;
  border-radius: 12px;
  margin-left: -1px;
  align-items: center;
  justify-content: center;
`;

export const More = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.success};
  width: 36px;
  height: 36px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const Result = styled.TextInput`
  width: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text};
  `};
`;