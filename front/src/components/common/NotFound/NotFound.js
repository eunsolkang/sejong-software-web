import React from 'react'

import styles from './NotFound.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button/Button'

const cx = classNames.bind(styles);

const NotFound = ({onGoBack, type}) => {
  return (
    <div className={cx('not-found')}>
      <h2>{type}</h2>
      <Button onClick={onGoBack} theme="red">
        돌아가기
      </Button>
    </div>
  )
}
export default NotFound;
