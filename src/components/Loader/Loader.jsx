import { Comment } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.loader}>
    <Comment
      height={80}
      width={80}
      radius={9}
      backgroundColor="#0084ff"
      color="#fff"
      ariaLabel="loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);
