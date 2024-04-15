import { useMedia } from "react-use"
import { GLOBAL_COLOR } from "../../../../constants/colors.constant"
import CustomImage from "../../../common/CustomImage"
import CustomText from "../../../common/CustomText"
import { FlexBox } from "../../../common/FlexBox"
import { SubTitle, Title } from "../../../common/text"

const items: any = [
  {
    title: "DOWNLOAD PHANTOM",
    content: "Download and install phantom on the appstore, or, alternatively if you’re on desktop, download and install the browser extension.",
    image: "/assets/images/phantom.svg",
    banner: "/assets/images/buy1.svg"
  },
  {
    title: "SECURE YOUR SOL",
    content: "Now all you’ve got to so is buy your SOL in the Phantom App, or, alternatively you can use an exchange and deposit using your wallet address.",
    image: "/assets/images/solana.svg",
    banner: "/assets/images/buy2.svg"
  },
  {
    title: "BUY SOME $ ACME",
    content: "Now go to Raydium and paste the $ACME contract address to swap your SOL.",
    image: "/assets/images/acme-coin.svg",
    banner: "/assets/images/buy3.svg"
  },
  {
    title: "PACK YOUR BAGS",
    content: "Now your’e all set. Pack your bags and join the rocket powered community to the moon.",
    image: "/assets/images/packbag.svg",
    banner: "/assets/images/buy3.svg"
  },
]

const HowToBuy = () => {
  const isMobile = useMedia("(max-width: 768px)");
  return (
    <FlexBox
      paddingTop="184px"
      paddingBottom="184px"
      bgColor={GLOBAL_COLOR.bgGrey}
      smPadding="65px 36px 77px"
    >

      <FlexBox direction="column" alignItems="center" gap="106px" width="1440px" smGap="71px">
        <Title smFontSize="36px">
          HOW TO BUY  <span>$</span>ACME
        </Title>
        <FlexBox flexWrap="wrap" gap="130px 50px" smGap="50px">
          {
            items.map((item: any) => {
              return (
                <FlexBox direction="column" width="553px" gap="23px" smGap="23px">
                  <FlexBox
                    justifyContent="start"
                    smJustifyContent="start"
                    smDirection="row" smGap="35px">
                    <CustomImage
                      image={item.banner}
                    />
                    {
                      isMobile &&
                      <CustomImage
                        image={item.image}
                        smWidth="72px"
                        smHeight="72px"
                      />
                    }
                  </FlexBox>
                  <FlexBox direction="column" gap="38px">
                    <SubTitle>
                      {item.title}
                    </SubTitle>
                    <FlexBox alignItems="center" gap="56px" paddingLeft="18px" smGap="38px">
                      {
                        !isMobile && <CustomImage
                          image={item.image}
                        />
                      }
                      <CustomText
                        text={item.content}
                        fontSize="26px"
                        width="355px"
                        smFontSize="22px"
                      />
                    </FlexBox>
                  </FlexBox>
                </FlexBox>
              )
            })
          }
        </FlexBox>

      </FlexBox>

    </FlexBox>
  )
}

export default HowToBuy