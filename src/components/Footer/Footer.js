import React from 'react';
import styles from './Footer.module.scss';

import linkedinLogo from 'assets/icons/linkedin-logo.png';
import githubLogo from 'assets/icons/github-logo.png';
import instagramIcon from 'assets/icons/instagram-icon.png';
import emailIcon from 'assets/icons/email-icon.png';

const Footer = () => {
  return (
    <section className={styles.Footer}>
      <h1 className={styles.logo}>Andy Edwards</h1>

      <div className={styles.social}>
        <a href='https://www.linkedin.com/in/andy-edwards-4073a010b/' target='_blank' rel="noopener noreferrer">
          <img className={styles.icon} src={linkedinLogo} alt='linkedin logo' />
        </a>
        <a href='https://www.github.com/AndyHEdwards' target='_blank' rel="noopener noreferrer">
          <img className={styles.icon} src={githubLogo} alt='github logo' />
        </a>
        <a href='https://www.instagram.com/andy_edwards1/' target='_blank' rel="noopener noreferrer">
          <img className={styles.icon} src={instagramIcon} alt='github logo' />
        </a>
        <a href='mailto:andyhedwards@gmail.com'>
          <img className={styles.icon} src={emailIcon} alt='github logo' />
        </a>
      </div>

      <p className={styles.copyright}>Copyright © Andy Edwards 2018.</p>
    </section>
  );
}

export default Footer;
