import React from 'react';
import styles from './Services.module.scss';
import iconStrategy from 'assets/icons/icon-strategy.svg';
import lightBulb from 'assets/icons/icon-light-bulb.svg';
import iconLaptop from 'assets/icons/icon-laptop.svg';
import Fade from 'react-reveal/Fade';

const Services = () => {
  return (
    <section className={styles.ServicesSection} id='services'>
      <Fade bottom fraction={0.5} duration={1300}>
        <h2 className={styles.heading}>Services</h2>
      </Fade>


      <div className={styles.services}>
        <div className={styles.service}>
          <Fade bottom delay={400} duration={1300}>
            <img className={styles.icon} src={iconStrategy} alt='icon-Strategy' />
            <div className={styles.subHeading}>Strategy</div>
            <div className={styles.content}>From inception to creatoin I can help make your dream product become a reality all the way through the build process</div>
          </Fade>
        </div>
        <div className={styles.service}>
          <Fade bottom delay={1400} duration={1300}>
            <img className={styles.icon} src={lightBulb} alt='icon-lightBulb' />
            <div className={styles.subHeading}>Design</div>
            <div className={styles.content}>With my up to date knowloedge of the lateset and greatest design trends, I blend seamless functionality with cutting edge design.</div>
          </Fade>
        </div>
        <div className={styles.service}>
          <Fade bottom delay={2500} duration={1300}>
            <img className={styles.icon} src={iconLaptop} alt='icon-Laptop' />
            <div className={styles.subHeading}>Development</div>
            <div className={styles.content}>With many years of development experience under my belt, I can build, host and maintain your product.</div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Services;
