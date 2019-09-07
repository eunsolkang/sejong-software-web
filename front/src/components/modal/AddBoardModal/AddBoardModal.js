import React from 'react'

import styles from './AddBoardModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import Button from 'components/common/Button'

const cx = classNames.bind(styles)

const AddBoardModal = ({visible, onAdd, onCancel}) => {
  return (
    <ModalWrapper visible="true">
      <div className={cx('question')}>
       게시판 추가
      </div>
      <div className={cx('data')}>
        <input type="text" placeholder="이름입력"/>
      </div>
      <div className={cx('options')}>
        <Button theme="gray" onClick={onCancel}>취소</Button>
        <Button onClick={onAdd}>추가</Button>
      </div>
    </ModalWrapper>
  )
}

export default AddBoardModal
