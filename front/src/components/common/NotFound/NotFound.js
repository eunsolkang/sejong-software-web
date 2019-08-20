import React from 'react'
import PropTypes from 'prop-types'
import styles from './NotFound.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button/Button'

const cx = classNames.bind(styles);

const NotFound = ({onGoBack}) => {
  return (
    <div className={cx('not-found')}>
      <h2>존재하지 않는 페이지입니다</h2>
      <Button onClick={onGoBack} theme="outline">
        돌아가기
      </Button>
    </div>
  )
}
export default NotFound;
