import React, { useContext } from "react";
import { StatusBar } from "react-native";
import {
  Container,
  Img,
  Title,
  Btn,
  TitleBtn,
  HeaderArea,
  Header,
  TitleHeader,
} from "./styles";

import AuthContext from "../../contexts/authContext";

import img from "../../temp/start.png";

const Start = () => {
  const { handleSubmit } = useContext(AuthContext);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <HeaderArea>
        <Header>
          <TitleHeader>Olá, seja bem vindo!!</TitleHeader>
        </Header>
      </HeaderArea>
      <Container>
        <Img source={img} resizeMode="contain" />
        <Title>Descubra quais são as melhores receitas do mundo!!</Title>
        <Btn onPress={handleSubmit}>
          <TitleBtn>Vamos lá!</TitleBtn>
        </Btn>
      </Container>
    </>
  );
};

export default Start;
