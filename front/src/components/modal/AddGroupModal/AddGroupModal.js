import React from 'react'

import styles from './AddGroupModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import Button from 'components/common/Button'

const cx = classNames.bind(styles)

const AddGroupModal = ({visible, onConfirm, onCancel, onChange, type, onChangeMenu, boards, boardName="게시판선택"}) => {
  const boardList = boards && boards.map(

    (board) => {
      const {name, is_admin, ix, parent_name} = board.toJS();
      if(parent_name === 'etc'){
        return (
          <a
            id={ix}
            name={name}
            onClick={onChangeMenu}
            className={cx('dropdown-content-index')}
            key={ix}
          >
          {name}
        </a>
        )
      }

    }
  );
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('question')}></div>
      <div className={cx('data')}>
        <div className={cx('dropdown')}>
          <div className={cx('drop-btn')}>{boardName}</div>
          <div className={cx('dropdown-content')}>
            {boardList}
          </div>
        </div>
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

export default AddGroupModal
