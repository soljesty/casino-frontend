import styled from "styled-components"
import CustomImage from "../../../common/CustomImage"
import CustomButton from "../../../common/CustomButton"
import CustomExternalLinkButton from "../../../common/CustomExternalLinkButton"
import { FlexBox } from "../../../common/FlexBox"

const BannerStyle = styled.div`
  background-image: url("/assets/images/banner.svg");
  display: flex;
  flex-direction: column;
  gap: 205px;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 264px;
  position: relative;
`

const Header = styled.div`
  position: absolute;
  top: 42px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  width: 1440px;
  padding-left: 54px;
  padding-right: 51px;
`

const Banner = () => {
  return (
    <BannerStyle>
      <Header>
        <CustomButton
          text="Menu"
          width="126px"
        />
        <FlexBox justifyContent='end' gap="10px">
          <CustomExternalLinkButton
            width='158px'
            text="CHART"
          />
          <CustomExternalLinkButton
            width='119px'
            text="BUY"
          />
          <CustomExternalLinkButton
            width='66px'
            text={
              <CustomImage image="/assets/images/socials/discord.svg" width="50px" height="50px" />
            }
          />
          <CustomExternalLinkButton
            width='66px'
            text={
              <CustomImage image="/assets/images/socials/twitter.svg" width="50px" height="50px" />
            }
          />
        </FlexBox>
      </Header>

      <CustomImage
        image="/assets/images/logo.svg"
        width="658px"
        height="117px"
      />
      <CustomImage
        image="/assets/images/rocket.svg"
        width="281px"
        height="142px"
      />
    </BannerStyle>
  )
}

export default Banner