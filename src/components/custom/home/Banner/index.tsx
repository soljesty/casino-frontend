import styled from "styled-components"
import CustomImage from "../../../common/CustomImage"

const BannerStyle = styled.div`
  background-image: url("/assets/images/banner.svg");
  display: flex;
  flex-direction: column;
  gap: 205px;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 264px;
`

const Banner = () => {
  return (
    <BannerStyle>
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