import React from 'react';
import styles from './Contact.module.scss';
import ContactForm from '../forms/ContactForm/ContactForm';
import ContactSuccess from '../forms/ContactSuccess/ContactSuccess';

import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    };

    this.sendMail = this.sendMail.bind(this);
  }

  sendMail(name, email, message) {
    const msg = {
      to: 'andyhedwards@gmail.com',
      from: 'andy@andyedwards.io',
      subject: 'Important - Contact from andyedwards.io',
      text: message,
      html: `<strong>Name: ${name} <br/><br/>Email: ${email} <br/><br/>Message: ${message}</strong>`,
      headers: {"Priority": "Urgent", "Importance": "high"},
    };

    sgMail.send(msg).then(() => {
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
