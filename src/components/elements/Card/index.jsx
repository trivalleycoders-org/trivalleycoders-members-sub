import React from 'react';
import styles from './style.css';
import classNames from 'classnames'
import Identicon from '../../elements/Identicon'

import { log } from '../../../lib/ke-utils'

// _id is optional and thus far only passed by Members
const Card = ({ src, title, subTitle, style, _id }) => {

  const imgStyle = classNames({
    [styles.smallImg]: style === 'smallImage',
    [styles.wideImg]: style === 'wideImage',
    // [styles.memberImg]: style === 'memberImg',
    'card-img-top': true,
  })
  const cardStyle = classNames({
    card: true,
    [styles.cardModified]: true,
  })
  const cardBodyStyle = classNames({
    'card-body': true,
    [styles.cardBodyModified]: true,
  })
  const cardTitle = classNames({
    'card-title': true,
    [styles.cardTitleModified]: true,
  })
  const cardSubTitle = classNames({
    color: 'orange',
  })
  log('style', style, 'blue')
  log('imgStyle', imgStyle, 'blue')
  // Passing an _id but not a src will result in an identicon being produced
  const getPicture = () => {
    if (src === '') {
      return <Identicon
        hash={_id}
             />
    } else {
      return <img className={imgStyle} src={src} alt="member" />
    }
  }
  // If props.name is not passed in then don't render the name text
  let renderTitles
  if (title && subTitle) {
    renderTitles = (<div className={cardBodyStyle}>
      <h5 className={cardTitle}>{title}</h5>
      <h6 className={cardSubTitle}>{subTitle}</h6>
    </div>)
 } else if ( title ) {
   renderTitles = (<div className={cardBodyStyle}>
      <h5 className={cardTitle}>{title}</h5>
    </div>)
} else {
  renderTitles = null
}

  log(`${src}, ${title}, ${title}`)
  log('typeof', renderTitles, 'blue')

  return (
    <div className={cardStyle}>
      <div>
        {getPicture()}
      </div>
      {renderTitles}
    </div>
  );
};
export default Card
