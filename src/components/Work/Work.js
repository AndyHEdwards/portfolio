import React from 'react';
import styles from './Work.module.scss';

import Modal from 'components/modals/Modal/Modal';
import ModalContent from 'components/modals/ModalContent/ModalContent';

import iyptFootprints from 'assets/icons/iypt-footprints.svg';
import reaLogo from 'assets/icons/rea-logo.svg';
import cleversparkyLogo from 'assets/icons/cleversparky-logo.svg';
import landcheckerLogo from 'assets/icons/landchecker-logo.svg';

const Work = () => {
  return (
    <section className={styles.Work}>
      <h2 className={styles.heading}>Work</h2>

      <div className={styles.examples}>
        <Modal imgSrc={iyptFootprints} triggerText='Yarning Straight Out'>
          <ModalContent
            title='Yarning Straight Out'
            description='Yarning Straight Out is Victoria’s Drug and Alcohol info tool for young Aboriginal People.'
            technologyDescrtiption='Yarning Straight Out is a responsive client side application built with EmberJs. This app is a purely client side application as no user user data is stored, so there is no backend. It is hosted with AWS and uses google analytics to track user interaction. It also utilises various differnet libraries for sound playback and videos.'
            mockupPath='iypt-mockups'
          />
        </Modal>
        <Modal imgSrc={reaLogo} triggerText='Lead Management System'>
          <ModalContent
            title='REA LMS'
            description='A lead management system for Realestate.com.au'
            technologyDescrtiption='This application is made from two seperate Emberjs apps running off a Ruby on Rails Backend. The two client side apps have a shared component library to encapsulate the reusable components code.'
            mockupPath='rea-mockup'
          />
        </Modal>
        <Modal imgSrc={cleversparkyLogo} triggerText=''>
          <ModalContent
            title='Cleversparky'
            description='Admin panel for Cleversparky ios app.'
            technologyDescrtiption='Emberjs Frontend, Rails BAckend'
            mockupPath='cleversparky-mockup'
          />
        </Modal>
        <Modal imgSrc={landcheckerLogo} triggerText=''>
          <ModalContent
            title='Landchecker'
            description='Check the planning permissions of any parcel of land in Victoria.'
            technologyDescrtiption='Emberjs Frontend, Rails BAckend, NodeJs assets'
            mockupPath='landchecker-mockup'
          />
        </Modal>
      </div>
    </section>
  );
}

export default Work;
