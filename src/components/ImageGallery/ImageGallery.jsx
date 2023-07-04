import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onImageClick }) => (
  <>
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.webformatURL}
          name={image.tags}
          url={image.webformatURL}
          onClick={() => onImageClick(image.largeImageURL)}
        />
      ))}
    </ul>
  </>
);

ImageGallery.propTypes = {
  images: PropTypes.array,
  onImageClick: PropTypes.func,
};
