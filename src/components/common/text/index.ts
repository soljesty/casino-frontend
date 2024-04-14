import styled from "styled-components";
import { GLOBAL_FONTS } from "../../../constants/fonts.constant";

export const Title = styled.div`
  color: #FFF;

  text-align: center;
  text-shadow: 4px 4px 0px #000;
  -webkit-text-stroke-width: 2;
  -webkit-text-stroke-color: #000;
  font-family: ${GLOBAL_FONTS.main};
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  span{
    color: #FFD500;
  }
  @media only screen and (max-width: 640px) {
    font-size: 46px;
  }
`;

export const SubTitle = styled.div`
  color: #FFF;

  text-align: center;
  text-transform: uppercase;
  text-shadow: 4px 4px 0px #000;
  -webkit-text-stroke-width: 2;
  -webkit-text-stroke-color: #000;
  font-family: ${GLOBAL_FONTS.main};
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  span{
    color: #FFD500;
  }
  @media only screen and (max-width: 640px) {
    font-size: 46px;
  }
`;