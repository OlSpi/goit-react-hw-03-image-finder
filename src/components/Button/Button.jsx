import css from './Button.module.css';

export const Button = ({ onLoadMore }) => (
  <button className={css.loadMore} type="button" onClick={onLoadMore}>
    Load More
  </button>
);
