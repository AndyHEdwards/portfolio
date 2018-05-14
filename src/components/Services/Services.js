import React from 'react';
import styles from './Services.module.scss';
import iconStrategy from 'assets/icons/icon-strategy.svg';
import lightBulb from 'assets/icons/icon-light-bulb.svg';
import iconLaptop from 'assets/icons/icon-laptop.svg';

const Services = () => {
  return (
    <section className={styles.ServicesSection}>
      <h2 className={styles.heading}>Services</h2>

      <div className={styles.services}>
        <div className={styles.service}>
          <img className={styles.icon} src={iconStrategy} alt='icon-Strategy' />
          <div className={styles.subHeading}>Strategy</div>
          <div className={styles.content}>From inception to creatoin I can help make your dream product become a reality all the way through the build process</div>
        </div>
        <div className={styles.service}>
          <img className={styles.icon} src={lightBulb} alt='icon-lightBulb' />
          <div className={styles.subHeading}>Design</div>
          <div className={styles.content}>With my up to date knowloedge of the lateset and greatest design trends, I blend seamless functionality with cutting edge design.</div>
        </div>
        <div className={styles.service}>
          <img className={styles.icon} src={iconLaptop} alt='icon-Laptop' />
          <div className={styles.subHeading}>Development</div>
          <div className={styles.content}>With many years of development experience under my belt, I can build your product.</div>
        </div>
      </div>
    </section>
  );
}

export default Services;
