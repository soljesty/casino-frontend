import { FlexBox } from '../../../common/FlexBox'
import { GLOBAL_COLOR } from '../../../../constants/colors.constant'
import { SubTitle } from '../../../common/text'
import CustomImage from '../../../common/CustomImage'
import CustomButton from '../../../common/CustomButton'
import CustomText from '../../../common/CustomText'
import styled from 'styled-components'
import { GLOBAL_FONTS } from '../../../../constants/fonts.constant'

const items: string[] = [
  "100 billion supply",
  "100 billion supply",
  "100 billion supply",
  "100 billion supply",
]

const Address = styled.div`
  display: flex;
  max-width: 630px;
  width: 100%;
  padding: 14px 30px;
  justify-content: center;
  align-items: center;
  border: 1px solid #252525;
  
  background: #FFF;

  box-shadow: 4px 4px 0px 0px #000;
  color: #000;

  font-family: ${GLOBAL_FONTS.main};
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 768px) {
    font-size: 22px;
    white-space: nowrap;
    overflow: hidden!important;
    text-overflow: ellipsis;
  }
`

const Tokenomics = () => {
  return (
    <FlexBox bgColor={GLOBAL_COLOR.cyan} justifyContent='center' alignItems='center'>
      <FlexBox width="1440px" justifyContent='center' alignItems='center' paddingTop='114px' paddingBottom='142px' paddingLeft='130px' paddingRight='130px' gap="156px"
        smPadding='31px 21px 77px 38px'
        smGap='54px'
      >
        <CustomImage
          image="/assets/images/token-supply.svg"
          width='385px'
          height="572px"
          smWidth='206px'
          smHeight='302px'
        />
        <FlexBox direction='column' gap="60px" smGap='46px'>
          <FlexBox direction='column' gap="30px" smGap='30px'>
            <SubTitle>
              Tokenomics
            </SubTitle>
            <FlexBox direction='column' gap="7px" >
              {
                items.map((item: string) => {
                  return (
                    <FlexBox gap="38px" justifyContent='start' smDirection='row' smJustifyContent='start'>
                      <CustomImage
                        image="/assets/images/star.svg"
                      />
                      <CustomText
                        text={item}
                        fontSize='26px'
                        smFontSize='22px'
                      />
                    </FlexBox>
                  )
                })
              }
            </FlexBox>
          </FlexBox>
          <FlexBox direction='column' gap="20px">
            <SubTitle>
              Contract
            </SubTitle>
            <Address>
              A3eME5CetyZPBoWbRUwY3tSe25S6tb18ba9ZPbWk9eFJ
            </Address>
            <CustomButton
              text="COPY"
            />

          </FlexBox>

        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}

export default Tokenomics