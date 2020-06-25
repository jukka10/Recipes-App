import React from "react";

import { Container, Image, TextTopic, TimeArea, Time } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

const Card = ({ img, desc }) => {
  return (
    <Container>
      <Image source={img} />
      <TextTopic>{desc}</TextTopic>
      <TimeArea>
        <Time>40 Minutos </Time>
        <Icon name="timer" size={16} color="#999" />
      </TimeArea>
    </Container>
  );
};

export default Card;
