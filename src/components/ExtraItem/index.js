import React from 'react';
import styles from './index.module.css';
import CheckIcon from '../../assets/check.svg';

const ExtraItem = ({ text }) => {
  return (
    <div className={styles.item}>
      <span className={styles.icon}>
        <img src={CheckIcon} alt="icon" />
      </span>
      <p>{text}</p>
    </div>
  );
};

export default ExtraItem;
