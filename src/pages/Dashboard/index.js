import React from "react";
import { StatusBar } from "react-native";
import {
  Container,
  Title,
  SearchView,
  SearchBox,
  TextTopic,
  AreaPopular,
  AreaCategory,
  Header,
  HeaderArea,
} from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";

import Card from "../../components/card";
import CardCategory from "../../components/CardCategory";

import ImgSalada from "../../temp/salada.jpg";
import ImgCandy from "../../temp/doces.jpg";
import ImgFruit from "../../temp/frutas.png";

import ImgBolo from "../../temp/card.jpg";

const Dashboard = () => {
  Icon.loadFont();
  return (
    <>
      <Container>
        <Title>As melhores receitas para você</Title>
        <SearchView>
          <SearchBox
            placeholder="Encontre uma receita"
            placeholderTextColor="#000"
          />
          <Icon onPress={() => {}} name="search" size={38} color="#000" />
        </SearchView>

        <TextTopic>Mais populares 🔥</TextTopic>
        <AreaPopular>
          <Card img={ImgBolo} desc={"Bolo de brigadeiro com ninho trufado"} />
          <Card
            img={ImgSalada}
            desc={"Salada de legumes com tempero especial "}
          />
        </AreaPopular>
        <TextTopic>Mais Categorias 😋</TextTopic>
        <AreaCategory>
          <CardCategory Img={ImgCandy} category="Doces" />
          <CardCategory Img={ImgFruit} category="Frutas" />
          <CardCategory Img={ImgSalada} category="Saladas" />
        </AreaCategory>
      </Container>
    </>
  );
};

export default Dashboard;
