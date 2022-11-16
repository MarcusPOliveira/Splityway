import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { CaretRight, MapPin } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import {
  Container,
  InfoCard,
  Header,
  LocationTitle,
  Date,
  Footer,
  Amount,
  Status,
  ButtonWrapper,
  Button
} from './styles';

type Props = RectButtonProps & {}

export function GroupCard({ ...rest }: Props) {

  const { colors } = useTheme();

  return (
    <Container>
      <InfoCard>
        <Header>
          <MapPin color={colors.secondary} size={28} />
          <LocationTitle>Pizzaria do Zé</LocationTitle>
          <Date>22/08/22</Date>
        </Header>
        <Footer>
          <Amount>R$ 75,00</Amount>
          <Status>Em aberto</Status>
        </Footer>
      </InfoCard>
      <ButtonWrapper>
        <Button {...rest}>
          <CaretRight color={colors.white} size={28} weight='bold' />
        </Button>
      </ButtonWrapper>
    </Container>
  );
}
