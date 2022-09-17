import styled from "styled-components";
import { FlexBox } from "~/constants/Common.style";
import { media } from "~/constants/Media";
import { pxToRem } from "~/constants/Size";

const Container = styled(FlexBox)`
  width: ${pxToRem(1080)};
  height: 100vh;
  margin: 0 auto;

  background-color: #ffffff;
  ${media.laptop} {
    width: 100%;
  }
`;

export default Container;
