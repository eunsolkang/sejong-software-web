import React from 'react'

import styles from './AddBoardModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import Button from 'components/common/Button'


const cx = classNames.bind(styles)

const AddBoardModal = ({visible, onConfirm, onCancel, onChange, type}) => {
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('question')}>
       게시판 {type ? "수정" : "추가"}
      </div>
      <div className={cx('data')}>
        <input type="text" placeholder="이름입력" onChange={onChange} name="boardName"/>
      </div>
      <div className={cx('options')}>
        <Button theme="gray" onClick={onCancel}>취소</Button>
        <Button onClick={onConfirm}>추가</Button>
      </div>
    </ModalWrapper>
  )
}

export default AddBoardModal
