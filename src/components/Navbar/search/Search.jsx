import React from 'react';
import styles from './search.module.css';
import {CiSearch} from 'react-icons/ci';

export default function SearchFeild() {
  return (
    <div className={styles.wrapper}>
        <CiSearch className={styles.searchLogo} />
        <input type="text" placeholder='Search for items'/>
    </div>
  )
}
