import React from 'react';
import styles from './ContactForm.module.scss';
import TextField from '../TextField/TextField';
import TextareaField from '../TextareaField/TextareaField';
import Button from '../../Button/Button';

function validate(name, email, message) {
  // true means invalid, so conditions are reversed
  return {
    name: name.length === 0,
    email: email.length === 0 || !(/^.+@.+\..+$/).test(email),
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
      success: false,
    };

    this.sendMail = this.props.sendMail.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.canBeSubmitted = this.canBeSubmitted.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.canBeSubmitted()) {
      this.sendMail(this.state.name, this.state.email, this.state.message);
    }
  }

  canBeSubmitted() {
    const errors = validate(this.state.name, this.state.email, this.state.message);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render(props) {
    const errors = validate(this.state.name, this.state.email, this.state.message);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <form onSubmit={this.handleSubmit} className={styles.ContactForm}>
        <div className={styles.nameEmailRow}>
          <div className={styles.nameField}>
            <TextField
              name='name'
              labelText='Name'
              value={this.state.name}
              handleInputChange={this.handleInputChange}
              hasError={errors.name}
            />
          </div>
          <div className={styles.emailField}>
            <TextField
              name='email'
              labelText='Email'
              value={this.state.email}
              handleInputChange={this.handleInputChange}
              hasError={errors.email}
            />
          </div>
        </div>
        <div className={styles.messageRow}>
          <div className={styles.messageField}>
            <TextareaField
              name='message'
              labelText='Message'
              value={this.state.message}
              handleInputChange={this.handleInputChange}
              hasError={errors.message}
            />
          </div>
        </div>
        <div className={styles.submitRow}>
          <Button disabled={isDisabled}
            text='Send'
            handleClick={this.handleSubmit}
          />
        </div>
      </form>
    );
  }
}
