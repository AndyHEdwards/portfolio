import React from 'react';
import styles from './Work.module.scss';

import Fade from 'react-reveal/Fade';

import Modal from 'components/modals/Modal/Modal';
import ModalContent from 'components/modals/ModalContent/ModalContent';

import landcheckerLogo from 'assets/icons/landchecker-logo.svg';
import rmitLogo from 'assets/icons/rmit-logo.svg';
import andyEdwardsLogo from 'assets/icons/andy-edwards-logo.png';

const Work = () => {
  return (
    <section className={styles.Work} id='work'>
      <h2 className={styles.heading}>Work</h2>

      <div className={styles.examples}>
        <div className={styles.example}>
          <Fade right duration={1700} fraction={0.7}>
            <ModalContent
              title='Yarning Straight Out'
              description='Yarning Straight Out is Victoria’s Drug and Alcohol info tool for young Aboriginal People.'
              technologyDescrtiption='Yarning Straight Out is a responsive client side application built with Ember.js. This app is a purely client side application as no user user data is stored, so there is no backend. It is hosted with AWS and uses google analytics to track user interaction. It also utilises various differnet libraries for sound playback and videos.'
              mockupPath='iypt-mockups'
            />
          </Fade>
        </div>

        <div className={[styles.example, styles.cleversparky].join(' ')}>
          <Fade left duration={1700} fraction={0.7}>
            <ModalContent
              reversed
              title='Cleversparky'
              description='The Cleversparky Web App allows administrators and business owners to monitor and manage their site emergency lighting data in a webview.'
              technologyDescrtiption='Cleversparky comprises of an IOS app used by technicians, a responsive Ember.js web app for administrators and a Ruby on Rails Backend.'
              mockupPath='cleversparky-mockup-reverse'
            />
          </Fade>
        </div>

        <div className={styles.example}>
          <Fade right duration={1700} fraction={0.7}>
            <ModalContent
              title='REA LMS'
              description='The REA LMS app was built to streamline an archaic lead management system.'
              technologyDescrtiption='This application is made from two seperate Ember.js apps running off a Ruby on Rails Backend. The two client side apps have a shared component library to encapsulate the reusable components code.'
              mockupPath='rea-mockup'
            />
          </Fade>
        </div>
      </div>

      <div className={styles.modalExamples}>
        <Modal imgSrc={landcheckerLogo} triggerText=''>
          <ModalContent
            title='Landchecker'
            description='Landchecker is a property planning web application that allows buyers, selling agents, architects and land developers to easily access planning zones and overlays information in Victoria on an interactive map.'
            technologyDescrtiption='Landchecker is made up of an Ember.js web app, a Ruby on Rails backend and a Node.js server that serves static assets for the interactive map.'
            smallMockup
            mockupPath='landchecker-mockup'
          />
        </Modal>
        <Modal imgSrc={rmitLogo} triggerText='RMIT Ballot Web App'>
          <ModalContent
            title='RMIT Ballot App'
            description='The RMIT Ballot web app gives students an easy and simple way to ballot for courses and set preferences for the studios they wish to take through the ease of their own desktop or mobile device.'
            technologyDescrtiption='The RMIT Ballot Web App is a responsive app built entirely with Ruby on Rails.'
            smallMockup
            mockupPath='rmit-mockup'
          />
        </Modal>
        <Modal imgSrc={andyEdwardsLogo} triggerText=''>
          <ModalContent
            title='My Portfolio'
            description='This portfolio was designed and developed by me.'
            technologyDescrtiption='I built this portfolio using React.js for my own personal learning. It is hosted on S3 and uses Route 53 as a DNS and Cloudfront as a CDN. '
          />
        </Modal>
      </div>

      <p className={styles.contatMe}>If you'd like to see more examples of my work, please feel free to get in contact with me!</p>
    </section>
  );
}

export default Work;
