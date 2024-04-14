import { GLOBAL_TEXT } from '../../../../constants/texts.constant'
import CustomExternalLinkButton from '../../CustomExternalLinkButton'
import CustomImage from '../../CustomImage'
import CustomText from '../../CustomText'
import { FlexBox } from '../../FlexBox'
import * as S from './index.styled'


const Footer = () => {
  return (
    <S.FooterStyle>
      <S.Container>
        <FlexBox justifyContent='space-between' >
          <CustomImage
            image="/assets/images/logo.svg"
            width='293px'
            height='49px'
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
        </FlexBox>
        <CustomText
          width="1038px"
          text={GLOBAL_TEXT.footer.disclaimer}
        />
      </S.Container>
    </S.FooterStyle>
  )
}

export default Footer