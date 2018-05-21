import React from 'react';
import styles from './Contact.module.scss';
import ContactForm from '../forms/ContactForm/ContactForm';

const Contact = () => {
  return (
    <section className={styles.Contact} id='contact'>
      <h2 className={styles.heading}>Contact</h2>

      <ContactForm/>
    </section>
  );
}

export default Contact;
