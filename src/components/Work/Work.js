import React from 'react';
import styles from './Work.module.scss';

import Modal from 'components/modals/Modal/Modal';
import ModalContent from 'components/modals/ModalContent/ModalContent';

import iyptFootprints from 'assets/icons/iypt-footprints.svg';
import reaLogo from 'assets/icons/rea-logo.svg';
import cleversparkyLogo from 'assets/icons/cleversparky-logo.svg';
import landcheckerLogo from 'assets/icons/landchecker-logo.svg';
import rmitLogo from 'assets/icons/rmit-logo.svg';

const Work = () => {
  return (
    <section className={styles.Work} id='work'>
      <h2 className={styles.heading}>Work</h2>

      <div className={styles.examples}>
        <Modal imgSrc={iyptFootprints} triggerText='Yarning Straight Out'>
          <ModalContent
            title='Yarning Straight Out'
            description='Yarning Straight Out is Victoria’s Drug and Alcohol info tool for young Aboriginal People.'
            technologyDescrtiption='Yarning Straight Out is a responsive client side application built with Ember.js. This app is a purely client side application as no user user data is stored, so there is no backend. It is hosted with AWS and uses google analytics to track user interaction. It also utilises various differnet libraries for sound playback and videos.'
            mockupPath='iypt-mockups'
          />
        </Modal>
        <Modal imgSrc={reaLogo} triggerText='Lead Management System'>
          <ModalContent
            title='REA LMS'
            description='The REA LMS app was built to streamline an archaic lead management system.'
            technologyDescrtiption='This application is made from two seperate Ember.js apps running off a Ruby on Rails Backend. The two client side apps have a shared component library to encapsulate the reusable components code.'
            mockupPath='rea-mockup'
          />
        </Modal>
        <Modal imgSrc={cleversparkyLogo} triggerText=''>
          <ModalContent
            title='Cleversparky'
            description='The Cleversparky Web App allows administrators and business owners to monitor and manage their site emergency lighting data in a webview.'
            technologyDescrtiption='Cleversparky comprises of an IOS app used by technicians, a responsive Ember.js web app for administrators and a Ruby on Rails Backend.'
            mockupPath='cleversparky-mockup'
          />
        </Modal>
        <Modal imgSrc={landcheckerLogo} triggerText=''>
          <ModalContent
            title='Landchecker'
            description='Landchecker is a property planning web application that allows buyers, selling agents, architects and land developers to easily access planning zones and overlays information in Victoria on an interactive map.'
            technologyDescrtiption='Landchecker is made up of an Ember.js web app, a Ruby on Rails backend and a Node.js server that serves static assets for the interactive map.'
            mockupPath='landchecker-mockup'
          />
        </Modal>
        <Modal imgSrc={rmitLogo} triggerText='RMIT Ballot Web App'>
          <ModalContent
            title='RMIT Ballot App'
            description='The RMIT Ballot web app gives students an easy and simple way to ballot for courses and set preferences for the studios they wish to take through the ease of their own desktop or mobile device.'
            technologyDescrtiption='The RMIT Ballot Web App is a responsive app built entirely with Ruby on Rails.'
            mockupPath='rmit-mockup'
          />
        </Modal>
      </div>
      <p className={styles.contatMe}>If you'd like to see more examples of my work, please feel free to get in contact with me!</p>
    </section>
  );
}

export default Work;
