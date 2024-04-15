import { GLOBAL_COLOR } from "../../../../constants/colors.constant"
import CustomButton from "../../../common/CustomButton"
import CustomImage from "../../../common/CustomImage"
import CustomText from "../../../common/CustomText"
import { FlexBox } from "../../../common/FlexBox"
import { SubTitle } from "../../../common/text"

const GamesBurn = () => {
  return (
    <FlexBox height="966px" alignItems="center">
      <FlexBox bgColor={GLOBAL_COLOR.bgGrey} height="100%" justifyContent="end" borderRight="3px black solid">
        <FlexBox width="720px" height="100%" direction="column" gap="38px" justifyContent="center" paddingLeft="120px">
          <CustomImage
            image="/assets/images/mini-games.svg"
          />
          <SubTitle>
            MINI GAMES
          </SubTitle>
          <CustomText
            fontSize="32px"
            text="First mini game acme will release is called pocket rocket. Once we release pocket rocket, we will roll out other mini games. Leaderboard points earn $ACME rewards."
            width="462px"
          />
          <CustomButton
            text="PLAY"
            soon={true}
          />
        </FlexBox>

      </FlexBox>
      <FlexBox bgColor={GLOBAL_COLOR.cyan} height="100%" justifyContent="start">
        <FlexBox width="720px" height="100%" direction="column" gap="38px" justifyContent="center" paddingLeft="120px">
          <CustomImage
            image="/assets/images/burn.svg"
          />
          <SubTitle>
            BURN MECHANISMS
          </SubTitle>
          <CustomText
            fontSize="32px"
            text="Acme will roll out burning mechanisms to make $ACME a deflationary coin. Participation in the game and other mechanisms will contribute to the burning of $ACME."
            width="462px"
          />
          <CustomButton
            text="LEARN"
            soon={true}
            width="158px"
          />
        </FlexBox>

      </FlexBox>


    </FlexBox>
  )
}

export default GamesBurn