import React from 'react';
import styles from './Hero.module.scss';

import ReactRotatingText from 'react-rotating-text';

const Hero = () => {
  return (
    <section className={styles.Hero} id='hero'>
      <div className={styles.headingWrapper}>
        <h1 className={styles.heading}>
          Hi, my name is Andy <br/> I am a <span className={styles.rotatingText}><ReactRotatingText styles={styles.textRotator} items={['responsive web developer', 'designer', 'traveller', 'mountain biker', 'book lover']} /></span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
