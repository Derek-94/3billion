import React from "react";
import styled from "styled-components";

const Animals = ({ animalList }) => {
  return (
    <AnimalsLayout>
      <AnimalGallery>
        {animalList.map((animal) => (
          <AnimalArticle key={animal.id}>
            <AnimalImg src={animal.img_url} alt="img" />
            <ButtonWrapper>
              <LikeButton>좋아요</LikeButton>
              <DislikeButton>싫어요</DislikeButton>
            </ButtonWrapper>
          </AnimalArticle>
        ))}
      </AnimalGallery>
      <AnimalListWrapper>
        <AnimalList>
          {animalList.map((animal) => (
            <h2>{animal.name}</h2>
          ))}
        </AnimalList>
        <ClassifyButton>좋아하는 동물들 나누기</ClassifyButton>
      </AnimalListWrapper>
    </AnimalsLayout>
  );
};

export default Animals;

const AnimalsLayout = styled.section`
  display: flex;
  width: 1110px;
  justify-content: space-between;
`;

const AnimalGallery = styled.section`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AnimalArticle = styled.article`
  width: 285px;
  height: 345px;
`;

const AnimalImg = styled.img`
  width: 285px;
  height: 285px;
`;

const ButtonWrapper = styled.div`
  margin-top: 15px;
`;

const LikeButton = styled.button`
  width: 135px;
  height: 45px;
  background-color: white;
  border: 1px #a5a5a5 solid;
  margin-right: 15px;
  &:active {
    background-color: blue;
    color: white;
  }
`;

const DislikeButton = styled.button`
  width: 135px;
  height: 45px;
  background-color: white;
  border: 1px #a5a5a5 solid;
  &:active {
    background-color: orange;
    color: white;
  }
`;

const AnimalListWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const AnimalList = styled.section`
  border: 1px solid red;
  width: 400px;
  height: 720px;
`;

const ClassifyButton = styled.button`
  margin-top: 30px;
  height: 80px;
  font-weight: bold;
  font-size: 24px;
  background-color: #dcdcdc;
  color: #323232;
`;
