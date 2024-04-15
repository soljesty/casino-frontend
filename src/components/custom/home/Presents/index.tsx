import CustomImage from "../../../common/CustomImage"
import CustomText from "../../../common/CustomText"
import { FlexBox } from "../../../common/FlexBox"
import { SubTitle } from "../../../common/text"

const Presents = () => {
  return (
    <FlexBox
      paddingTop="91px"
      paddingBottom="135px"
      bgColor="#737A96"
      marginTop="0px"
    >
      <FlexBox
        width="1440px"
        paddingLeft="200px"
        paddingRight="200px"
        justifyContent="space-between"
      >
        <CustomImage
          image="/assets/images/acme-roll.svg"
          marginTop="36px"
        />
        <FlexBox direction="column" gap="26px" width="843px">
          <SubTitle>
            DON PABLO PRESENTS <span>$</span>ACME
          </SubTitle>
          <CustomText
            text="At ACME, we're set to elevate your crypto journey, inspired by Don Pablo the Coyote's resilience to setbacks. With ACME's rocket powered community, your pursuit of memecoin success is moon bound, undeterred by any challenge."
            color="white"
            fontSize="26px"
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}

export default Presents