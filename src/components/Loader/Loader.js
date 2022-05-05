import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <BallTriangle
      className={styles.Loader}
      color="#00BFFF"
      height={80}
      width={80}
    />
  );
};

export default Loader;
