import React from "react";
import { useLocation } from "react-router";

import styled from "styled-components";

const Classification = () => {
  const location = useLocation();

  return (
    <ClassificationWrapper>
      <LikeList>
        <Title style={{ color: "#006ebe" }}>좋아요</Title>
        <AnimalImgWrapper>
          {location.state &&
            location.state.animals.map(
              (animal) =>
                animal.like && <AnimalImg src={animal.img_url} alt="img" />
            )}
        </AnimalImgWrapper>
      </LikeList>
      <DislikeList>
        <Title style={{ color: "#d74b00" }}>싫어요</Title>
        <AnimalImgWrapper>
          {location.state &&
            location.state.animals.map(
              (animal) =>
                animal.dislike && <AnimalImg src={animal.img_url} alt="img" />
            )}
        </AnimalImgWrapper>
      </DislikeList>
    </ClassificationWrapper>
  );
};

export default Classification;

const ClassificationWrapper = styled.section`
  display: flex;
  width: 1110px;
  justify-content: space-between;
`;

const LikeList = styled.article`
  border: 2px solid #006ebe;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 540px;
`;

const DislikeList = styled.article`
  border: 2px solid #d74b00;
  flex-direction: column;
  width: 540px;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin: 47px 0;
`;

const AnimalImgWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AnimalImg = styled.img`
  width: 285px;
  height: 285px;
  margin-bottom: 30px;
`;
