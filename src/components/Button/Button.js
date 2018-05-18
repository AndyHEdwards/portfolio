import React from 'react';
import styles from './Button.module.scss';

export default class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.props.handleClick.bind(this);
  }

  render() {

    return (
      <button className={styles.Button} onClick={this.handleClick} disabled={this.props.disabled}>
        {this.props.text}
      </button>
    );
  }
}
