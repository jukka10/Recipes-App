import styled from "styled-components/native";

export const Container = styled.View`
  flex: 5;
  background: #fff;
`;
export const Img = styled.Image`
  width: 400px;
  height: 400px;
`;
export const Title = styled.Text`
  margin-top: 10px;
  font-size: 35px;
  font-weight: 500;
  text-align: center;
  color: #000;
`;

export const Btn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50px;
  border-radius: 15px;
  background: #000;
  position: absolute;
  bottom: 70px;
  align-self: center;

  box-shadow: 4px 4px 4px #ccc;
`;

export const TitleBtn = styled.Text`
  font-size: 30px;
  font-weight: 500;
  color: #fff;
`;

export const HeaderArea = styled.View`
  flex: 1;
  background: #fff;
`;
export const Header = styled.View`
  flex: 1;
  background: #000;
  border-bottom-left-radius: 130px;
  border-bottom-right-radius: 130px;
  justify-content: center;
  align-items: center;
`;

export const TitleHeader = styled.Text`
  font-size: 35px;
  color: #fff;
`;
