import styled from "styled-components";
import { GLOBAL_COLOR } from "../../../../constants/colors.constant"
import { FlexBox } from "../../../common/FlexBox"
import { SubTitle } from "../../../common/text"
import { SocialCard } from "../../../card/SocialCard";

const SocialGroup = styled.div`
  width: calc(100% - 36px);
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    gap: 18px;
  }
`;

const Community = () => {
  return (
    <FlexBox bgColor={GLOBAL_COLOR.yellow} direction="column" paddingTop="173px" paddingBottom="150px" gap="80px" alignItems="center"
      borderBottom="3px solid #252525"
      borderTop="3px solid #252525"
      smPadding="58px 10px"
      smGap="40px"
    >
      <SubTitle>
        ROCKET POWERED COMMUNITY
      </SubTitle>
      <SocialGroup>
        <a href="https://twitter.com/ACMEACMEsnft" target="_blank" rel="noopener noreferrer" style={{
          textDecoration: 'none'
        }}>
          <SocialCard type="twitter" />
        </a>
        <a href="https://twitter.com/ACMEACMEsnft" target="_blank" rel="noopener noreferrer" style={{
          textDecoration: 'none'
        }}>
          <SocialCard type="discord" />
        </a>
        <a href="https://twitter.com/ACMEACMEsnft" target="_blank" rel="noopener noreferrer" style={{
          textDecoration: 'none'
        }}>
          <SocialCard type="telegram" />
        </a>
      </SocialGroup>
    </FlexBox>
  )
}

export default Community