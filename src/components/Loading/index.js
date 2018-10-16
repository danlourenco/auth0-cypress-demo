import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './loading.module.scss';

const Loading = () => (
  <div className={ styles.loadingContainer}>
    <Loader type="ThreeDots" color="#ccc" height={100} width={100} />
  </div>
)

export default Loading;
