import { useMedia } from 'react-use'
import { GLOBAL_TEXT } from '../../../../constants/texts.constant'
import CustomExternalLinkButton from '../../CustomExternalLinkButton'
import CustomImage from '../../CustomImage'
import CustomText from '../../CustomText'
import { FlexBox } from '../../FlexBox'
import * as S from './index.styled'


const Footer = () => {
  const isMobile = useMedia("(max-width: 768px)");
  return (
    <S.FooterStyle>
      <S.Container>
        <FlexBox justifyContent='space-between' smGap='30px' smAlignItems='center'>
          <CustomImage
            image="/assets/images/logo.svg"
            width='293px'
            height='49px'

          />
          {
            isMobile &&
            <FlexBox smJustifyContent='center' smAlignItems='center' smPaddingTop='14px'>
              <CustomText
                width="1038px"
                text={GLOBAL_TEXT.footer.disclaimer}
                smTextAlign='center'
                smMaxWidth='240px'
              />
            </FlexBox>
          }

          <FlexBox justifyContent='end' gap="10px" flexWrap='wrap' smDirection='row'>
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
                <CustomImage image="/assets/images/socials/discord.svg" width="50px" height="50px"
                  smWidth='50px' smHeight='50px'
                />
              }
            />
            <CustomExternalLinkButton
              width='66px'
              text={
                <CustomImage image="/assets/images/socials/twitter.svg" width="50px" height="50px"
                  smWidth='50px' smHeight='50px'
                />
              }
            />
          </FlexBox>
        </FlexBox>
        {
          !isMobile &&
          <FlexBox smJustifyContent='center' smAlignItems='center'>
            <CustomText
              width="1038px"
              text={GLOBAL_TEXT.footer.disclaimer}
              smTextAlign='center'
              smMaxWidth='240px'
            />
          </FlexBox>
        }


      </S.Container>
    </S.FooterStyle>
  )
}

export default Footer