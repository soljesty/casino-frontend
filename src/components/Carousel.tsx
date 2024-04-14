import { wrap } from "@motionone/utils";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, ReactNode } from "react";
import { styled } from "styled-components";
import { GLOBAL_FONTS } from "../constants/fonts.constant";
import CustomImage from "./common/CustomImage";

interface ICarousel {
  text?: any;
  bgColor: string;
}

const MainContainer = styled.div<ICarousel>`
  max-width: 100vw;
  background-color: ${(props) => props.bgColor};
  border-top: 3px solid #252525;
  border-bottom: 3px solid #252525;
`;

const TextDiv = styled.div`
  padding: 18px 0 16px;

  @media (max-width: 640px) {
    padding: 28px 0 20px;
  }
`;

const Text = styled.h2`
  color: #FFF;

  text-align: center;
  leading-trim: both;

  text-edge: cap;
  text-shadow: 4px 4px 0px #000;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: #000;
  font-family: ${GLOBAL_FONTS.main};
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 57px;
  padding-right: 57px;

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const Motion = styled(motion.div)`
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
`;

const Parallax = styled.div`
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`;

interface ParallaxProps {
  children: ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <Parallax>
      <Motion style={{ x }}>
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
      </Motion>
    </Parallax>
  );
}



export const Carousel = ({ text, bgColor }: ICarousel) => {
  return (
    <MainContainer bgColor={bgColor}>
      <TextDiv>
        <ParallaxText baseVelocity={-0.2}>
          <Text>
            <CustomImage
              image="/assets/images/carousel.svg"
            />
            {text}
          </Text>
        </ParallaxText>
      </TextDiv>
    </MainContainer>
  );
};
