import React from 'react';
import styles from './Skills.module.scss';

const Skills = () => {
  let assetPath = `${process.env.REACT_APP_AWS_ASSET_BUCKET_URL}/skills`;

  return (
    <section className={styles.Skills} id='skills'>
      <h2 className={styles.heading}>Skills</h2>

      <div className={styles.logos}>
        <img className={styles.logo} src={`${assetPath}/es6-logo.png`} alt='es6 logo' />
        <img className={styles.logo} src={`${assetPath}/ember-logo.png`} alt='ember logo' />
        <img className={styles.logo} src={`${assetPath}/react-logo.png`} alt='react logo' />
        <img className={styles.logo} src={`${assetPath}/html5-logo.png`} alt='html5 logo' />
        <img className={styles.logo} src={`${assetPath}/jquery-logo.png`} alt='jquery logo' />
        <img className={styles.logo} src={`${assetPath}/css3-logo.png`} alt='css3 logo' />
        <img className={styles.logo} src={`${assetPath}/rails-logo.png`} alt='rails logo' />
        <img className={styles.logo} src={`${assetPath}/node-logo.png`} alt='node logo' />
        <img className={styles.logo} src={`${assetPath}/google-analytics-logo.png`} alt='google-analytics logo' />
        <img className={styles.logo} src={`${assetPath}/git-logo.png`} alt='git logo' />
        <img className={styles.logo} src={`${assetPath}/rspec-logo.png`} alt='rspec logo' />
        <img className={styles.logo} src={`${assetPath}/atom-logo.png`} alt='atom logo' />
        <img className={styles.logo} src={`${assetPath}/sketch-logo.png`} alt='sketch logo' />
      </div>
    </section>
  );
}

export default Skills;
