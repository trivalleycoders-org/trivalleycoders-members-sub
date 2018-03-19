// Member
import React from 'react';
import styles from './style.css';
import Identicon from './../../Identicon'
import { log } from '../../../../lib/ke-utils'

const Member = ({ _id, src, title, subTitle }) => {

  const getPicture = () => {
    if (src === '') {
      return <Identicon
        hash={_id}
             />
    } else {
      return <img className={styles.memberImg} src={src} alt='member' />
    }
  }
  return (
    <div className={styles.memberItem}>
      {getPicture()}
      <div className={styles.titles}>
        <div className={styles.memberName}>{title}</div>
        <div className={styles.memberRole}>{subTitle}</div>
      </div>
    </div>
  )
};

export default Member;
