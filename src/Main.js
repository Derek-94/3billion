import React from "react";
import styled from "styled-components";

import AnimalsContainer from "./components/container/AnimalsContainer";

const Main = () => {
  return (
    <MainWrapper>
      <Header>내가 좋아하는 동물</Header>
      <AnimalsContainer />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
`;

const Header = styled.header`
  display: inline-block;
  line-height: 80px;
  margin-bottom: 30px;
  width: 1110px;
  height: 83px;
  font-weight: bold;
  text-align: center;
  font-size: 32px;
  color: #ffffff;
  background-color: #323232;
`;
