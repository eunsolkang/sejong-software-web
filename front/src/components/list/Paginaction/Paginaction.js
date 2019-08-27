import React from 'react'

import styles from './Paginaction.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button'

const cx = classNames.bind(styles);

const Paginaction = ({page, onNextClick, onPrevClick, count}) => {
  return (
    <div className={cx('paginaction')}>
      <Button onClick={onPrevClick} disabled={page === 0}>
       이전페이지
      </Button>
      <div className={cx('number')}>
        페이지 {page+1}
      </div>
      <Button onClick={onNextClick} disabled={count !== 10}>
        다음 페이지
      </Button>
    </div>
  )
}

export default Paginaction
