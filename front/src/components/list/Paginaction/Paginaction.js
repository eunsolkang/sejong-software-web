import React from 'react'
import PropTypes from 'prop-types'
import styles from './Paginaction.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button'

const cx = classNames.bind(styles);

const Paginaction = (props) => {
  return (
    <div className={cx('paginaction')}>
      <Button disabled>
       이전페이지
      </Button>
      <div className={cx('number')}>
        페이지 1
      </div>
      <Button>
        다음 페이지
      </Button>
    </div>
  )
}

export default Paginaction
