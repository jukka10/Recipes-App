import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 90%;
  height: 120px;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 4px #999;
  margin: 10px;
  background: rgba(0, 0, 0, 1);
  border-radius: 8px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;

  background: transparent;
  opacity: 0.4;
`;

export const Title = styled.Text`
  font-size: 35px;
  color: #fff;
  font-weight: bold;
  position: absolute;
`;
