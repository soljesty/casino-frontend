import styled from 'styled-components'

import Banner from './Banner'
import Community from './Community'
import { Faq } from './FAQ'
import HowToBuy from './HowToBuy'
import Presents from './Presents'
import { Carousel } from '../../Carousel'
import { GLOBAL_COLOR } from '../../../constants/colors.constant'
import NFTMint from './NFTMint'
import GamesBurn from './GamesBurn'
import Tokenomics from './Tokenomics'

const HomeElementStyle = styled.div`
  position: relative;
  overflow-x: hidden;
`


const HomeElement = () => {
  return (
    <HomeElementStyle>
      <Banner />
      <Presents />
      
      <Carousel
        text={`#1 ROCKET POWERED COMMUNITY ON SOLANA`}
        bgColor={GLOBAL_COLOR.cyan}
      />
      <NFTMint />
       <GamesBurn />
      <Carousel
        text={`#1 ROCKET POWERED COMMUNITY ON SOLANA`}
        bgColor={GLOBAL_COLOR.red}
      />
      <Tokenomics />
      <HowToBuy />
      <Faq />
      <Community />
    </HomeElementStyle>
  )
}

export default HomeElement