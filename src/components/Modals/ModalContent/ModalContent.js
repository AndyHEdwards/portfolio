import React from 'react';
import styles from './ModalContent.module.scss';

const ModalContent = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.description}>{props.description}</p>
        <h3 className={styles.subTitle}>Technology</h3>
        <p className={styles.technologyDescrtiption}>{props.technologyDescrtiption}</p>
      </div>
      <div>
        <img className={styles.mockup} src={`${process.env.REACT_APP_AWS_ASSET_BUCKET_URL}/mockups/${props.mockupPath}.png`} alt='iypt footprints'/>
      </div>
    </div>
  );
}

export default ModalContent;
