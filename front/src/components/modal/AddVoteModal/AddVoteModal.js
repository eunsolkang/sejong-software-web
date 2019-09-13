import React from 'react'

import styles from './AddVoteModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import Button from 'components/common/Button'
import Toggle from 'react-toggle'

const cx = classNames.bind(styles)

const AddVoteModal = ({visible, onConfirm, onCancel, onChange, onAddVote, onAddItem, isVote="true", voteItems, add, item_add}) => {
  const voteList = voteItems && voteItems.map(
    (item) => {
      const {contents, ix} = item.toJS();
      return(
        <div className={cx('list-item')} key={ix}>{contents}</div>
      )
    }
  )
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('question')}></div>
      <div className={cx('data')}>

      </div>

      <div className={cx('data')}>
        <div className={cx('title')}>
          <input type="text" placeholder="투표이름입력" onChange={onChange} name="title"/>
          <Button onClick={onAddVote} disabled={add}>확인</Button>
        </div>
        {isVote &&
        <div className={cx('title')}>
          <input type="text" placeholder="항목추가" onChange={onChange} name="contents"/>
          <Button onClick={onAddItem} disabled={item_add}>+</Button>
        </div>
      }
      {isVote &&
        <div className={cx('list')}>
          {voteList}
        </div>
      }


      </div>
      <div className={cx('options')}>
        <Button theme="gray" onClick={onCancel}>취소</Button>
        <Button onClick={onConfirm}>추가</Button>
      </div>
    </ModalWrapper>
  )
}

export default AddVoteModal
