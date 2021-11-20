import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Animals = ({ animalList }) => {
  const history = useHistory();
  const [animalState, setAnimalState] = useState([]);

  const onClickLike = (id) => {
    setAnimalState(() =>
      animalState.map((ani) =>
        ani.id === id ? { ...ani, like: !ani.like, dislike: false } : ani
      )
    );
  };

  const onClickDislike = (id) => {
    setAnimalState(() =>
      animalState.map((ani) =>
        ani.id === id ? { ...ani, like: false, dislike: !ani.dislike } : ani
      )
    );
  };

  const onClassify = () => {
    history.push({
      pathname: "/classification",
      state: {
        animals: animalState,
      },
    });
  };

  useEffect(() => {
    let animalStatesAdded = [];
    for (let i = 0; i < animalList.length; i++) {
      animalStatesAdded.push({
        ...animalList[i],
        like: false,
        dislike: false,
      });
    }
    console.log(animalStatesAdded);
    setAnimalState(() => animalStatesAdded);
  }, [animalList]);

  return (
    <AnimalsLayout>
      <AnimalGallery>
        {animalState.map((animal) => (
          <AnimalArticle key={animal.id}>
            <AnimalImg src={animal.img_url} alt="img" />
            <ButtonWrapper>
              {animal.like ? (
                <LikeButtonActivate onClick={() => onClickLike(animal.id)}>
                  좋아요
                </LikeButtonActivate>
              ) : (
                <LikeButton onClick={() => onClickLike(animal.id)}>
                  좋아요
                </LikeButton>
              )}
              {animal.dislike ? (
                <DislikeButtonActivate
                  onClick={() => onClickDislike(animal.id)}
                >
                  싫어요
                </DislikeButtonActivate>
              ) : (
                <DislikeButton onClick={() => onClickDislike(animal.id)}>
                  싫어요
                </DislikeButton>
              )}
            </ButtonWrapper>
          </AnimalArticle>
        ))}
      </AnimalGallery>
      <AnimalListWrapper>
        <AnimalList>
          {animalState.map((animal) => (
            <>
              {!(animal.like || animal.dislike) && (
                <AnimalText>{animal.name}</AnimalText>
              )}
              {animal.like && (
                <AnimalText style={{ color: "#006ebf" }}>
                  {animal.name}
                </AnimalText>
              )}
              {animal.dislike && (
                <AnimalText style={{ color: "#d74b00" }}>
                  {animal.name}
                </AnimalText>
              )}
            </>
          ))}
        </AnimalList>
        <ClassifyButton onClick={onClassify}>
          좋아하는 동물들 나누기
        </ClassifyButton>
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
  cursor: pointer;
`;

const LikeButtonActivate = styled.button`
  background-color: #006ebf;
  color: white;
  width: 135px;
  height: 45px;
  border: 1px #a5a5a5 solid;
  margin-right: 15px;
  cursor: pointer;
`;

const DislikeButton = styled.button`
  width: 135px;
  height: 45px;
  background-color: white;
  border: 1px #a5a5a5 solid;
  cursor: pointer;
`;

const DislikeButtonActivate = styled.button`
  background-color: #d74b00;
  color: white;
  width: 135px;
  height: 45px;
  border: 1px #a5a5a5 solid;
  cursor: pointer;
`;

const AnimalListWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const AnimalList = styled.section`
  border: 1px solid red;
  width: 400px;
  height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AnimalText = styled.h1`
  font-size: 24px;
`;

const ClassifyButton = styled.button`
  border: none;
  margin-top: 30px;
  height: 80px;
  font-weight: bold;
  font-size: 24px;
  background-color: #dcdcdc;
  color: #323232;
  cursor: pointer;
`;
