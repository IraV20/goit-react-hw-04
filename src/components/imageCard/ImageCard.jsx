import css from "./ImageCard.module.css";

const ImageCard = ({ image, onImgClick }) => {
  const handleClick = () => {
    onImgClick(image.urls.full);
  };

  return (
    <div className={css.imgCard} onClick={handleClick}>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
