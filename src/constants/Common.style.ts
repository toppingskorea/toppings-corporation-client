import styled, { CSSProperties } from "styled-components";
import { media } from "./Media";
import { pxToRem } from "./Size";

export const SizedBox = styled.div<{
  height?: number;
  width?: number;
  moWidth?: number;
  moHeight?: number;
}>`
  ${({ height }) => height && `height: ${pxToRem(height)};`}
  ${({ width }) => width && `width: ${pxToRem(width)};`}


  ${media.tablet} {
    ${({ moWidth }) => moWidth && `width: ${pxToRem(moWidth)};`}
    ${({ moHeight }) => moHeight && `height: ${pxToRem(moHeight)};`}
  }
`;

export const FlexBox = styled.div<{
  _direction?: CSSProperties["flexDirection"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  gap?: number;
  bgColor?: string;
  position?: CSSProperties["position"];
  moGap?: number;
  shadow?: {
    value: string;
    borderRadius: number;
  };
  selfAlignRowCenter?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
}>`
  position: ${({ position }) => position || "static"};
  display: flex;
  flex-direction: ${({ _direction }) => _direction || "row"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  ${({ gap }) => gap !== undefined && `gap: ${pxToRem(gap)};`}

  ${({ selfAlignRowCenter }) => selfAlignRowCenter && "margin: 0 auto;"}

  ${({ fullWidth }) => fullWidth && "width: 100%;"}
  ${({ fullHeight }) => fullHeight && "height: 100%;"}

  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
`;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;
