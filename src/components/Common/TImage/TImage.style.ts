import styled from "styled-components";
import { pxToRem } from "~/constants/Size";

const Container = styled.div<{
  width?: number;
  height?: number;
}>`
  width: ${({ width }) => (width ? pxToRem(width) : "auto")};
  height: ${({ height }) => (height ? pxToRem(height) : "auto")};
`;

export default Container;
