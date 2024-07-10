import React from 'react';
import { Icon } from '@iconify/react';
import styles from './arrow.module.css';

function Arrow() {
  return (
    <div>
      <Icon icon="line-md:chevron-small-double-down" className={styles.arrow} />
    </div>
  );
}

export default Arrow;
