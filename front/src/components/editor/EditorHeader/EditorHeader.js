import React from 'react'

import classNames from 'classnames/bind';
import styles from './EditorHeader.scss'
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const EditorHeader = ({onGoBack, onSubmit, isEdit, boardIx}) => {
  console.log(boardIx);
  return (
    <div className={cx('editor-header')}>
      <div className={cx('back')}>
        <Button onClick={onGoBack} theme="outline">뒤로가기</Button>
      </div>
      <div className={cx('submit')}>
        <Button onClick={onSubmit} theme={boardIx && 'outline'} disabled={ !boardIx }>{isEdit ? '수정' : '작성'}하기</Button>
      </div>
    </div>
  )
}

export default EditorHeader;
