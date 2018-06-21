import React from 'react';
import styles from './Modal.module.scss';
import ResponsiveModal from 'react-responsive-modal';

export default class Modal extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    return this.state.open ? false : this.setState({ open: true});
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render(props) {
    const { open } = this.state;

    return (
      <div className={styles.trigger} onClick={this.onOpenModal}>
        <ResponsiveModal open={open} onClose={this.onCloseModal} center classNames={{ modal: styles.modal, closeIcon: styles.closeIcon }}>
          {this.props.children}
        </ResponsiveModal>

        <img className={styles.icon} src={this.props.imgSrc} alt='icon-src'/>

        {!!this.props.triggerText? <h3 className={styles.triggerText}>{this.props.triggerText}</h3> : '' }
      </div>
    );
  }
}
