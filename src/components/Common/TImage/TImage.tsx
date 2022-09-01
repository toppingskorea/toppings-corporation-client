import { LazyLoadImage } from "react-lazy-load-image-component";
import TImageProps from "./TImage.props";
import Container from "./TImage.style";

const TImage = ({ src, alt, ...restProps }: TImageProps) => {
  return (
    <Container {...restProps}>
      <LazyLoadImage
        src={src}
        alt={alt}
        width="100%"
        height="100%"
        effect="blur"
      />
    </Container>
  );
};

export default TImage;
