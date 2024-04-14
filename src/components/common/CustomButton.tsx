import styled from 'styled-components';
import parse from 'html-react-parser';
import { GLOBAL_FONTS } from '../../constants/fonts.constant';

const ActionIcon = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  position: absolute;
  top: -15px;
  right: -30px;
  border: 1px solid #252525;

  background: var(--Grey, #F7F7F7);
  padding: 4px 8px;

  color: #252525;
  text-transform: uppercase;
  font-family: ${GLOBAL_FONTS.main};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  box-shadow: '2px 4px 0px 0px #000';

  transition: 0.2s all;
  rotate: -10deg;
`;

interface CustomButtonType {
  text?: any;
  width?: string;
  height?: string;
  bgColor?: string;
  onClick?: () => void;
  onSubmit?: () => void;
  color?: string;
  type?: string;
  disabled?: boolean;
  borderRadius?: string;
  smWidth?: string;
  smHeight?: string;
  fontSize?: string;
  smFontSize?: string;
  smLineHeight?: string;
  lineHeight?: string;
  fontWeight?: string;
  smFontWeight?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  border?: string;
  activeBgColor?: string;
  marginTop?: string;
  marginBottom?: string;
  fontFamily?: string;
  boxShadow?: string;
  smMarginTop?: string;
  link?: string;
  scale?: string;
  soon?: boolean;
}

interface CustomButtonStyleType {
  width?: string;
  height?: string;
  bgColor?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  color?: string;
  disabled?: boolean;
  borderRadius?: string;
  smWidth?: string;
  smHeight?: string;
  fontSize?: string;
  smFontSize?: string;
  smLineHeight?: string;
  lineHeight?: string;
  fontWeight?: string;
  smFontWeight?: string;
  border?: string;
  marginTop?: string;
  marginBottom?: string;
  fontFamily?: string;
  boxShadow?: string;
  smMarginTop?: string;
  link?: string;
  scale?: string;
  type?: string;
  soon?: boolean;
}

const CustomButtonStyle = styled.div<CustomButtonStyleType>`
    cursor: pointer;
    position: relative;
    max-width: ${(props) => props.width || '132px'};
    width: 100%;
    font-family: ${(props) => props.fontFamily || GLOBAL_FONTS.main};
    
    height: ${(props) => props.height || '54px'};
    font-style: normal;
    font-weight: ${(props) => props.fontWeight || '400'};
    font-size: ${(props) => props.fontSize || '26px'};
    line-height: ${(props) => props.lineHeight || 'normal'}; 
    color: ${(props) => props.color || '#ffffff'};
    border: ${(props) => props.border || ''};
    background: ${(props) => props.disabled ? '#99e2d6' : props.bgColor || '#E6120B'};
    border-radius: ${(props) => props.borderRadius || '0px'};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${(props) => props.marginTop};
    box-shadow: ${(props) => props.boxShadow || '2px 4px 0px 0px #000'};
    margin-bottom: ${(props) => props.marginBottom};
    &:hover {
      transform: translateY(2px);

      ${ActionIcon} {
        rotate: 10deg;
      }
    }

    &:active {
      transform: translateY(4px);
    }
    
    &:disabled{
      cursor: not-allowed; 
      background-color: #99e2d6;
      color: #8c8b8e;
      /* opacity: 0.5;  */
    }

    @media screen and (max-width: 768px) {
        max-width: ${(props) => props.smWidth || '98px'};
        height: ${(props) => props.smHeight || '42px'};
        font-style: normal;
        font-weight: ${(props) => props.smFontWeight || '600'};
        font-size:${(props) => props.smFontSize || '16px'};
        line-height: ${(props) => props.smLineHeight || '26px'};
        margin-top: ${(props) => props.smMarginTop};
    }
`


const CustomButton = ({ hoverBgColor, boxShadow, fontFamily, text, width, bgColor, color, onClick, onSubmit, disabled, smHeight, smWidth, borderRadius, height, fontSize, smFontSize, fontWeight, smLineHeight, smFontWeight, hoverColor, border, marginTop, marginBottom, smMarginTop, scale, type, soon }: CustomButtonType) => {
  return (
    <CustomButtonStyle
      width={width} color={color} onClick={onClick} bgColor={bgColor} onSubmit={onSubmit} disabled={disabled} smHeight={smHeight} smWidth={smWidth} borderRadius={borderRadius} height={height}
      fontSize={fontSize}
      smFontSize={smFontSize}
      fontWeight={fontWeight}
      smFontWeight={smFontWeight}
      lineHeight={smLineHeight}
      smLineHeight={smLineHeight}
      hoverColor={hoverColor}
      border={border}
      marginTop={marginTop}
      marginBottom={marginBottom}
      hoverBgColor={hoverBgColor}
      fontFamily={fontFamily}
      boxShadow={boxShadow}
      smMarginTop={smMarginTop}
      scale={scale}
      type={type}
    >
      {parse(text)}
      {
        soon &&
        <ActionIcon>soon</ActionIcon>
      }
    </CustomButtonStyle>
  )
}

export default CustomButton;
