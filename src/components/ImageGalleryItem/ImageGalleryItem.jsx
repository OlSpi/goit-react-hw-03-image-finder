import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ name, url, onClick }) => (
  <>
    <li className={css.galleryItem}>
      <img className={css.galleryImg} src={url} alt={name} onClick={onClick} />
    </li>
  </>
);
