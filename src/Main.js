import React from "react";
import { Switch, Route } from "react-router-dom";

import AnimalsContainer from "./components/container/AnimalsContainer";
import Classification from "./Classification";

import styled from "styled-components";

const Main = () => {
  return (
    <MainWrapper>
      <Header>내가 좋아하는 동물</Header>
      <Switch>
        <Route exact path="/">
          <AnimalsContainer />
        </Route>
        <Route exact path="/classification">
          <Classification />
        </Route>
      </Switch>
      <Footer />
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

const Footer = styled.footer`
  height: 30px;
`;
