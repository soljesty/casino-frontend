import styled from "styled-components"
import { GLOBAL_COLOR } from "../../../../constants/colors.constant"
import CustomText from "../../../common/CustomText"
import { FlexBox } from "../../../common/FlexBox"
import { SubTitle } from "../../../common/text"
import CustomButton from "../../../common/CustomButton"

const NFTImage = styled.img`
  box-shadow: 4px 4px 0px 0px #000;
`

const NFTMint = () => {
  return (
    <FlexBox bgColor={GLOBAL_COLOR.yellow} borderBottom="3px solid #252525">
      <FlexBox padding="185px 20px 161px 20px" width="1440px" justifyContent="center" alignItems="center"

      >
        <FlexBox gap="95px" justifyContent="center" alignItems="center">
          <NFTImage
            src="/assets/images/nfts/8.svg"
          />
          <FlexBox direction="column" gap="32px" width="default">
            <SubTitle>
              NFT COLLECTION
            </SubTitle>
            <CustomText
              text="NFT collection inspired by our community figuring out ways to catch our moon shots."
              fontSize="26px"
              width="555px"
            />
            <CustomButton
              text="MINT"
              soon={true}
            />
          </FlexBox>
        </FlexBox>

      </FlexBox>
    </FlexBox>
  )
}

export default NFTMint