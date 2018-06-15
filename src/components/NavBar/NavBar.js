import React from 'react';
import styles from './NavBar.module.scss';
import mobileNavBarStyles from './MobileNavBar.js';

import Headroom from 'react-headroom';
import { slide as Menu } from 'react-burger-menu'
import { noScroll } from 'helpers.js';

import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isMobileNavOpen: false
    };

    this.toggleNoScroll = this.toggleNoScroll.bind(this);
    this.handleMobileNavClick = this.handleMobileNavClick.bind(this);
  }

  toggleNoScroll(state) {
    state.isOpen ? noScroll.on() : noScroll.off();
  }

  handleMobileNavClick() {
    this.setState({
      isMobileNavOpen: false
    });
  }

  render() {

    return (
      <Headroom>
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
                <AnchorLink className={styles.link} href='#skills'>Skills</AnchorLink>
              </div>
              <div className={styles.wrapper}>
                <AnchorLink className={styles.link} href='#contact'>Contact</AnchorLink>
              </div>
            </div>

            <div className={styles.mobileNav}>
              <Menu right styles={mobileNavBarStyles} onStateChange={ this.toggleNoScroll } isOpen={this.state.isMobileNavOpen}>
                <AnchorLink onClick={ this.handleMobileNavClick } className={styles.mobileLink} href='#hero'>Home</AnchorLink>
                <AnchorLink onClick={ this.handleMobileNavClick } className={styles.mobileLink} href='#services'>Services</AnchorLink>
                <AnchorLink onClick={ this.handleMobileNavClick } className={styles.mobileLink} href='#work'>Work</AnchorLink>
                <AnchorLink onClick={ this.handleMobileNavClick } className={styles.mobileLink} href='#skills'>Skills</AnchorLink>
                <AnchorLink onClick={ this.handleMobileNavClick } className={styles.mobileLink} href='#contact'>Contact</AnchorLink>
              </Menu>
            </div>
          </div>
        </div>
      </Headroom>
    );
  }
}
