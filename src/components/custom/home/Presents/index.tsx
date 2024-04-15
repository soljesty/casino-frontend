import { useMedia } from "react-use"
import CustomImage from "../../../common/CustomImage"
import CustomText from "../../../common/CustomText"
import { FlexBox } from "../../../common/FlexBox"
import { SubTitle } from "../../../common/text"

const Presents = () => {
  const isMobile = useMedia("(max-width: 768px)");
  return (
    <FlexBox
      paddingTop="91px"
      paddingBottom="135px"
      bgColor="#737A96"
      marginTop="0px"
      smPadding="50px 34px 49px 40px"
    >
      <FlexBox
        width="1440px"
        paddingLeft=""
        paddingRight=""
        justifyContent="center"
        gap = "103px"
        smDirection="column"
        smGap="33px"
      >
        {
          isMobile &&
          <SubTitle>
            DON PABLO PRESENTS <span>$</span>ACME
          </SubTitle>
        }
        <CustomImage
          image="/assets/images/acme-roll.svg"
          marginTop="36px"
          smMarginTop="0px"
          smWidth="120px"
          smHeight="207px"
        />
        <FlexBox direction="column" gap="26px" width="843px" smMarginTop="19px">
          {
            !isMobile &&
            <SubTitle>
              DON PABLO PRESENTS <span>$</span>ACME
            </SubTitle>
          }
          <CustomText
            text="At ACME, we're set to elevate your crypto journey, inspired by Don Pablo the Coyote's resilience to setbacks. With ACME's rocket powered community, your pursuit of memecoin success is moon bound, undeterred by any challenge."
            color="white"
            fontSize="26px"
            smFontSize="22px"
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}

export default Presents