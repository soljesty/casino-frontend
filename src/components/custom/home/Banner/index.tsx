import styled from "styled-components"
import CustomImage from "../../../common/CustomImage"
import CustomButton from "../../../common/CustomButton"
import CustomExternalLinkButton from "../../../common/CustomExternalLinkButton"
import { FlexBox } from "../../../common/FlexBox"
import { useMedia } from "react-use"

const BannerStyle = styled.div`
  background-image: url("/assets/images/banner.svg");
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 264px;
  position: relative;
  background-position: center;
  @media screen and (max-width: 768px) {
    height: 750px;
    padding-top: 130px;
  }

  /* border-bottom: #737A96 50px solid; */
`

const Header = styled.div`
  position: absolute;
  top: 42px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  max-width: 1440px;
  width: 100%;
  padding-left: 54px;
  padding-right: 51px;
  @media screen and (max-width: 768px) {
    top: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }
`

const Banner = () => {
  const isMobile = useMedia("(max-width: 768px)");
  return (
    <BannerStyle>
      <Header>
        {
          !isMobile &&
          <CustomButton
            text="Menu"
            width="126px"
          />
        }
        {
          isMobile && <CustomButton
            text={
              <img src = "/assets/images/menu.svg" width="17px" height = "17px" />
            }
            smWidth="52px"
            smHeight="52px"
          />
        }
        <FlexBox justifyContent='end' gap="10px" smDirection="row" smJustifyContent="end">
          {
            !isMobile &&
            <>
              <CustomExternalLinkButton
                width='158px'
                text="CHART"

              />
              <CustomExternalLinkButton
                width='119px'
                text="BUY"

              />
            </>
          }

          <CustomExternalLinkButton
            width='66px'
            smHeight="52px"
            text={
              <CustomImage image="/assets/images/socials/discord.svg" width="50px" height="50px" />
            }
          />
          <CustomExternalLinkButton
            width='66px'
            smHeight="52px"
            text={
              <CustomImage image="/assets/images/socials/twitter.svg" width="50px" height="50px" />
            }
          />
        </FlexBox>
      </Header>

      <FlexBox direction="column" gap='205px' smGap="98px" alignItems="center" smAlignItems="center" smJustifyContent="center">
        <CustomImage
          image="/assets/images/logo.svg"
          width="658px"
          height="117px"
          smWidth="90vw"
        />
        <CustomImage
          image="/assets/images/rocket.svg"
          width="281px"
          height="142px"
          smWidth="150px"
          smHeight="76px"
        />
      </FlexBox>
      {
        isMobile &&
        <FlexBox smDirection="row" smGap="13px" smMarginTop="181px">
          <CustomButton
            text="CHART"
            smWidth="158px"
            smHeight="52px"
          />
          <CustomButton
            text="BUY"
            smWidth="119px"
            smHeight="52px"
          />
        </FlexBox>
      }
    </BannerStyle>
  )
}

export default Banner