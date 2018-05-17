import React from 'react';
import styles from './ContactForm.module.scss';

function validate(name, email, message) {
  // true means invalid, so conditions are reversed
  return {
    name: name.length === 0,
    email: !(/^.+@.+\..+$/).test(email),
    message: message.length === 0,
  };
}

export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      touched: {
        name: false,
        email: false,
        message: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  handleSubmit = (evt) => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { name, email, message } = this.state;
    alert(`Signed up with name: ${name}, email: ${email}, message: ${message}`);
  }

  canBeSubmitted() {
    const { name, email, message } = this.state;
    return (
      name.length > 0 &&
      email.length > 0 &&
      message.length > 0
    );
  }

  render(props) {
    const errors = validate(this.state.name, this.state.email, this.state.message);
    const isEnabled = !Object.keys(errors).some(x => errors[x]);
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    return (
      <form onSubmit={this.handleSubmit} className={styles.ContactForm}>
        <input
          className={`${styles.input} ${shouldMarkError('name') ? styles.error : ""}`}
          onBlur={this.handleBlur('name')}
          type="text"
          name='name'
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <input
          className={`${styles.input} ${shouldMarkError('email') ? styles.error : ""}`}
          onBlur={this.handleBlur('email')}
          type="text"
          name='email'
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <input
          className={`${styles.input} ${shouldMarkError('message') ? styles.error : ""}`}
          onBlur={this.handleBlur('message')}
          type="text"
          name='message'
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleInputChange}
        />
        <button disabled={!isEnabled}>Sign up</button>
      </form>
    );
  }
}
