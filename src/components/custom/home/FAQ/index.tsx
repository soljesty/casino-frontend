import { styled } from "styled-components";

import { useState } from "react";
import { FaqItem } from "./FaqItem";
import { GLOBAL_COLOR } from "../../../../constants/colors.constant";
import { Title } from "../../../common/text";
import { FlexBox } from "../../../common/FlexBox";

const MainContainer = styled.div`
  max-width: 100vw;
  background-color: ${GLOBAL_COLOR.brown};
  padding-top: 149px;
  padding-bottom: 180px;
`;



const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;

  @media (max-width: 640px) {
    padding: 100px 0 30px;
  }
`;

const FaqLists = [
  {
    title: "What is $ACME?",
    detail: `A Kiki Koala is a unique and endearing digital character that's part of our exclusive NFT collection. These koalas are brought to life through intricate 3D art, each with its own distinct personality and charm. They are more than just digital assets; they are collectible pieces of art and a symbol of our vibrant community.`,
    id: 0,
  },
  {
    title: "WHO IS DON PABLO?",
    detail: `A Kiki Koala is a unique and endearing digital character that's part of our exclusive NFT collection. These koalas are brought to life through intricate 3D art, each with its own distinct personality and charm. They are more than just digital assets; they are collectible pieces of art and a symbol of our vibrant community.`,
    id: 1,
  },
  {
    title: "What is $ACME?",
    detail: `A Kiki Koala is a unique and endearing digital character that's part of our exclusive NFT collection. These koalas are brought to life through intricate 3D art, each with its own distinct personality and charm. They are more than just digital assets; they are collectible pieces of art and a symbol of our vibrant community.`,
    id: 2,
  },
  {
    title: "WHAT ARE THE ACME NFTS FOR?",
    detail: `A Kiki Koala is a unique and endearing digital character that's part of our exclusive NFT collection. These koalas are brought to life through intricate 3D art, each with its own distinct personality and charm. They are more than just digital assets; they are collectible pieces of art and a symbol of our vibrant community.`,
    id: 3,
  },
  {
    title: "WHAT ARE THE MINI GAMES?",
    detail: `A Kiki Koala is a unique and endearing digital character that's part of our exclusive NFT collection. These koalas are brought to life through intricate 3D art, each with its own distinct personality and charm. They are more than just digital assets; they are collectible pieces of art and a symbol of our vibrant community.`,
    id: 4,
  },
  {
    title: "WHAT ARE THE BURN MECHANISMS",
    detail: `A Kiki Koala is a unique and endearing digital character that's part of our exclusive NFT collection. These koalas are brought to life through intricate 3D art, each with its own distinct personality and charm. They are more than just digital assets; they are collectible pieces of art and a symbol of our vibrant community.`,
    id: 5,
  },

];

export const Faq = () => {
  const [active, setActive] = useState<number>(-1);
  return (
    <MainContainer>
      <FlexBox direction="column" alignItems="center" gap="67px">
        <Title>FAQs</Title>
        <Body>
          {FaqLists.map((data) => (
            <FaqItem
              key={data.id}
              data={data}
              setActive={setActive}
              active={active}
            />
          ))}
        </Body>
      </FlexBox>
    </MainContainer>
  );
};
