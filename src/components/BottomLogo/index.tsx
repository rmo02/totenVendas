import { Container, Logo } from "./styles";
import React from "react";
import logoImg from '../../../assets/logo.png';

export function BottomLogo() {

  return (
    <Container>
      <Logo source={logoImg}/>
    </Container>
  );
}
