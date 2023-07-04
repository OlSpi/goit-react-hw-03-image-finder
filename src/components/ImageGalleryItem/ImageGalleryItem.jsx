import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ name, url, onClick }) => (
  <>
    <li className={css.galleryItem}>
      <img className={css.galleryImg} src={url} alt={name} onClick={onClick} />
    </li>
  </>
);

ImageGalleryItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
};
