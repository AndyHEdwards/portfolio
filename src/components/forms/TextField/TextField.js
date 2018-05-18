import React from 'react';
import styles from './TextField.module.scss';

export default class TextField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      touched: false
    };

    this.handleInputChange = this.props.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur = (field) => (evt) => {
    this.setState({ touched: true });
  }

  render(props) {
    const shouldMarkError = () => {
      const hasError = !!this.props.hasError;
      const shouldShow = !!this.state.touched;

      return hasError && shouldShow ? styles.error : '';
    };

    const isRevealed = !!this.props.value ? styles.reveal : '';

    return (
      <label className={`${styles.TextField} ${shouldMarkError()}`}>
        <input
          className={styles.input}
          onBlur={this.handleBlur(this.props.name)}
          type="text"
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleInputChange}
        />
        <div className={`${styles.labelText} ${isRevealed}`}>{this.props.labelText}</div>
      </label>
    );
  }
}
