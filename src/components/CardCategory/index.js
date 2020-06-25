import React from "react";

import { Container, Image, Title } from "./styles";

const CardCategory = ({ Img, category }) => {
  return (
    <Container style={{ elevation: 10 }}>
      <Image source={Img} />
      <Title>{category}</Title>
    </Container>
  );
};
export default CardCategory;
