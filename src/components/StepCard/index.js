import React from 'react';
import styles from './index.module.css';

import Ribbon from '../Ribbon';

import Clock from '../../assets/clock.svg';
import Udemy from '../../assets/udemy.svg';

const StepCard = ({ title, description, background }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardBody}>
        <div className={styles.header}>
          <div className={styles.tags}>
            <Ribbon text="Video" customStyle={{
              padding: '4px 6px',
              fontWeight: 'bold',
              fontSize: '12px',
              lineHeight: '18px',
              color: '#BF7817',
              background: '#FFECD0',
              marginRight: '16px',
              borderRadius: '4px',
            }} />
            <Ribbon text="FREE" customStyle={{
              padding: '4px 6px',
              fontWeight: 'bold',
              fontSize: '12px',
              lineHeight: '18px',
              color: '#128945',
              border: '1px solid #D1F2E1',
              marginRight: '16px',
              borderRadius: '4px',
            }} />
            <span className={styles.duration}>
              <img src={Clock} alt="duration" />
              7 min
            </span>
          </div>
          <div className={styles.source}>
            <img src={Udemy} alt="source" />
          </div>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <button>See video</button>
      </div>
      <img src={background} alt="Card Background" />
    </div>
  );
};

export default StepCard;
