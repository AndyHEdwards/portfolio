import React from 'react';
import styles from './NavBar.module.scss';
import mobileNavBarStyles from './MobileNavBar.js';

import { slide as Menu } from 'react-burger-menu'

import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isMobileNavOpen: false
    };

    this.handleMobileNavClick = this.handleMobileNavClick.bind(this);
  }

  handleMobileNavClick() {
    this.setState({
      isMobileNavOpen: false
    });
  }

  render() {

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

          <div className={styles.mobileNav}>
            <Menu right styles={mobileNavBarStyles} isOpen={this.state.isMobileNavOpen}>
              <AnchorLink onClick={ this.handleMobileNavClick } className={styles.mobileLink} href='#hero'>Home</AnchorLink>
              <AnchorLink onClick={ this.handleMobileNavClick } className={styles.mobileLink} href='#services'>Services</AnchorLink>
              <AnchorLink onClick={ this.handleMobileNavClick } className={styles.mobileLink} href='#work'>Work</AnchorLink>
              <AnchorLink onClick={ this.handleMobileNavClick } className={styles.mobileLink} href='#contact'>Contact</AnchorLink>
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}
