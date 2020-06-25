import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background: #fff;
  flex: 1;
  padding: 10px 0px;
`;
export const Title = styled.Text`
  margin-top: 50px;
  margin-left: 20px;
  font-size: 35px;
  font-weight: 700;
  color: #000;
`;
export const SearchView = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  flex-direction: row;
`;
export const SearchBox = styled.TextInput`
  width: 80%;
  height: 45px;
  background: #ccc;
  border-radius: 5px;
  padding: 20px;
  font-size: 18px;
  margin: 0 5px;
`;

export const TextTopic = styled.Text`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 25px;
  font-weight: 700;
  color: #000;
`;
export const AreaPopular = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const AreaCategory = styled.View`
  justify-content: center;
  align-items: center;
`;
