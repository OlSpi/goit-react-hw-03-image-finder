import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleCloseModal = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { selectedImage } = this.props;

    return (
      <>
        <div className={css.overlay} onClick={this.handleCloseModal}>
          <div className={css.modal}>
            <img src={selectedImage} alt="" />
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  selectedImage: PropTypes.string,
  onClose: PropTypes.func,
};
