import React from 'react';
import styles from './Contact.module.scss';
import ContactForm from '../forms/ContactForm/ContactForm';
import ContactSuccess from '../forms/ContactSuccess/ContactSuccess';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    };

    this.sendMail = this.sendMail.bind(this);
  }

  sendMail(name, email, message) {
    fetch(`${process.env.REACT_APP_AWS_EMAIL_LAMBDA_API_GATEWAY_ENDPOINT}?name=${name}&email=${email}&message=${message}`).then(() => {
      this.setState({success: true});
    });
  }

  render() {

    const form = this.state.success ? <ContactSuccess /> : <ContactForm sendMail={this.sendMail}/>

    return (
      <section className={styles.Contact} id='contact'>
        <h2 className={styles.heading}>Contact</h2>

        {form}
      </section>
    );
  }
}
