import styled from "styled-components";
import { GLOBAL_COLOR } from "../../../../constants/colors.constant";

const FooterStyle = styled.div`
  background-color: ${GLOBAL_COLOR.cyan};
`

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 50px 78px 43px 54px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`

export {
  FooterStyle,
  Container
}