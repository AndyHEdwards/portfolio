import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.Hero} id='hero'>
      <div className={styles.headingWrapper}>
        <h1 className={styles.heading}>
          Freelance Strategist, Designer and developer who specialises in working remotely.
        </h1>
      </div>
    </section>
  );
}

export default Hero;
