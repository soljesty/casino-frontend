import styled from 'styled-components';
import { GLOBAL_FONTS } from '../../constants/fonts.constant';
interface CustomExternalLinkButtonType {
  text?: any;
  link?: string;
  width?: string;
  maxWidth?: string;
  bgColor?: string;
  onClick?: () => void;
  onSubmit?: () => void;
  color?: string;
  type?: string;
  cursor?: string;
  disabled?: boolean;
  height?: string;
  fontFamily?: string;
  marginTop?: string;
  smWidth?: string;
  smHeight?: string;
  borderRadius?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  smFontSize?: string;
  justifyContent?: string;
  className?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  smLineHeight?: string;
  smFontWeight?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
  textAlign?: string;
  alignItems?: string;
  smMarginTop?: string;
  scale?: string;
}


const CustomExternalLinkButtonStyle = styled.a<CustomExternalLinkButtonType>`
    cursor: ${(props) => props.cursor || 'pointer'};
    max-width: ${(props) => props.maxWidth};
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '66px'};
    font-family: ${(props) => props.fontFamily || GLOBAL_FONTS.main};
    text-align: ${(props) => props.textAlign || 'start'};
    text-wrap: nowrap;
    font-weight: ${(props) => props.fontWeight || '400'};
    font-size: ${(props) => props.fontSize || '26px'};
    line-height: ${(props) => props.lineHeight || 'normal'};
    color: ${(props) => props.color || '#ffffff'};
    background: ${(props) => props.bgColor || '#E6120B'};
    margin-top: ${(props) => props.marginTop || '0px'};
    border-radius: ${(props) => props.borderRadius || '0px'};
    display: flex;
    align-items: ${(props) => props.alignItems || 'center'};
    justify-content: ${(props) => props.justifyContent || 'center'};
    text-decoration: none;
    border-right: ${(props) => props.borderRight};
    border-left: ${(props) => props.borderLeft};
    border-top: ${(props) => props.borderTop};
    border-bottom: ${(props) => props.borderBottom};
    box-shadow: 2px 4px 0px 0px #000;
    
    &:hover{
      color: ${(props) => props.hoverColor};
      scale: ${(props) => props.scale || '1.05'};
      /* background: ${(props) => props.hoverBgColor || '#6073f6'}; */
    }
    &:active{
      background: '#6b6b6b';
    }
    &:disabled{
        cursor: not-allowed; 
        background-color: #767676;
        /* opacity: 0.5;  */
    }
    @media screen and (max-width: 768px) {
        max-width: ${(props) => props.smWidth || '100%'};
        height: ${(props) => props.smHeight || '66px'};
        margin-top: ${(props) => props.smMarginTop || '0px'};
        font-style: normal;
        font-weight: ${(props) => props.smFontWeight};
        font-size:${(props) => props.smFontSize || '18px'};
        line-height: ${(props) => props.smLineHeight || '26px'};
    }
`

const CustomExternalLinkButton = ({
  text,
  link, width, bgColor, color, onClick, onSubmit, cursor,
  disabled, height, marginTop, smHeight, smWidth, borderRadius,
  fontWeight,
  fontSize,
  lineHeight,
  smFontSize,
  justifyContent,
  className,
  hoverColor,
  hoverBgColor,
  smLineHeight,
  smFontWeight,
  borderTop,
  borderLeft,
  borderBottom,
  borderRight,
  textAlign,
  alignItems,
  fontFamily,
  maxWidth,
  smMarginTop,
  scale
}: CustomExternalLinkButtonType) => {
  return (
    <CustomExternalLinkButtonStyle
      smLineHeight={smLineHeight}
      href={link}
      width={width}
      color={color}
      onClick={onClick}
      bgColor={bgColor}
      onSubmit={onSubmit}
      cursor={cursor}
      height={height}
      maxWidth={maxWidth}
      marginTop={marginTop}
      disabled={disabled}
      smHeight={smHeight}
      smWidth={smWidth}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      smFontSize={smFontSize}
      justifyContent={justifyContent}
      className={className}
      hoverBgColor={hoverBgColor}
      hoverColor={hoverColor}
      smFontWeight={smFontWeight}
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderRight={borderRight}
      borderLeft={borderLeft}
      textAlign={textAlign}
      alignItems={alignItems}
      fontFamily={fontFamily}
      smMarginTop={smMarginTop}
      scale={scale}
      target='_blank'
    >
      {text}
    </CustomExternalLinkButtonStyle>
  )
}

export default CustomExternalLinkButton;