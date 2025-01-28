import { CarImage } from "../../../assets/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageComponent = () => {
  return (
    <>
      <LazyLoadImage
        alt={CarImage}
        effect="blur"
        wrapperProps={{
          // style: { transitionDelay: "1s" },
        }}
        src={CarImage}
      />
    </>
  );
};

export default ImageComponent;
