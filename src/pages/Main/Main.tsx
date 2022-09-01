import * as Images from "@images/main";
import TImage from "~/components/Common";
import { SizedBox } from "~/constants/Common.style";
import { Title1 } from "~/constants/Typography";
import { EXTRA_BOLD_WEIGHT } from "~/constants/Variables";
import Container from "./Main.style";

const Main = () => {
  return (
    <Container alignItems="center" _direction="column">
      <SizedBox height={20} />
      <Title1 weight={EXTRA_BOLD_WEIGHT} alignCenter>
        TOPPINGS
      </Title1>
      <SizedBox height={20} />
      <TImage src={Images.design01} alt="여기붙으라 팀원" />
      <TImage src={Images.design02} alt="TOPPINGS 는?" />
      <TImage src={Images.design03} alt="TOPPINGS 팀원 소개" />
      <TImage src={Images.design04} alt="팀원 모집 상세내용" />
      <TImage src={Images.design05} alt="연락 기다리고 있어요!" />
      <SizedBox height={20} />
    </Container>
  );
};

export default Main;
