import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Freelance Strategist, Designer and developer who specialises in working remotely.
        </h1>
      </div>
    </section>
  );
}

export default Hero;
