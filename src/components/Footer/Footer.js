import React from 'react';
import styles from './Footer.module.scss';

import linkedinLogo from 'assets/icons/linkedin-logo.png';

const Footer = () => {
  return (
    <section className={styles.Footer}>
      <h1 className={styles.logo}>Andy Edwards</h1>

      <div className={styles.social}>
        <a href='https://www.linkedin.com/in/andy-edwards-4073a010b/' target='_blank' rel="noopener noreferrer">
          <img className={styles.icon} src={linkedinLogo} alt='linkedin logo' />
        </a>
      </div>

      <p className={styles.copyright}>Copyright © Andy Edwards 2018.</p>
    </section>
  );
}

export default Footer;
