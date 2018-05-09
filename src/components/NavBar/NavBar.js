import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.content}>
        <div className='logo'>Andy Edwards</div>
        <div className={styles.links}>
          <div className={styles.link}>Home</div>
          <div className={styles.link}>Services</div>
          <div className={styles.link}>Work</div>
          <div className={styles.link}>Contact</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
