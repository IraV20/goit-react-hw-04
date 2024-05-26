import css from "./ImageGallery.module.css";
import ImageCard from "../imageCard/ImageCard";

const ImageGallery = ({ images, onImgClick }) => {
  return (
    <ul className={css.imageList}>
      {images.map((image) => (
        <li className={css.imageCard} key={image.id}>
          <ImageCard image={image} onImgClick={onImgClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
