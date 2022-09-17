import { Title1 } from "~/constants/Typography";
import Container from "./Main.style";

const Main = () => {
  return (
    <Container
      alignItems="center"
      _direction="column"
      fullWidth
      justifyContent="center"
    >
      <Title1 alignCenter>COMING SOON</Title1>
    </Container>
  );
};

export default Main;
