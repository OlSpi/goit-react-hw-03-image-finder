import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onLoadMore }) => (
  <button className={css.loadMore} type="button" onClick={onLoadMore}>
    Load More
  </button>
);

Button.propTypes = {
  onLoadMore: PropTypes.func,
};
