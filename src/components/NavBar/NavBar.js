import React from 'react';
import styles from './NavBar.module.scss';

import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.content}>
        <div className={styles.logo}>Andy Edwards</div>

        <div className={styles.links}>
          <div className={styles.wrapper}>
            <AnchorLink className={styles.link} href='#hero'>Home</AnchorLink>
          </div>
          <div className={styles.wrapper}>
            <AnchorLink className={styles.link} href='#services'>Services</AnchorLink>
          </div>
          <div className={styles.wrapper}>
            <AnchorLink className={styles.link} href='#work'>Work</AnchorLink>
          </div>
          <div className={styles.wrapper}>
            <AnchorLink className={styles.link} href='#contact'>Contact</AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
