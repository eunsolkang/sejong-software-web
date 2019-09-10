import React from 'react'

import classNames from 'classnames/bind';
import styles from './EditorHeader.scss'
import Button from 'components/common/Button';
import ic_back from 'ic/ic_back.png'
import ic_check from 'ic/ic_check.png'

const cx = classNames.bind(styles);

const EditorHeader = ({onGoBack, onSubmit, isEdit, boardIx}) => {
  console.log(boardIx);
  return (
    <div className={cx('editor-header')}>
      <div className={cx('back')}>
        <Button onClick={onGoBack} theme="outline"> <img src={ic_back}></img>뒤로가기</Button>
      </div>
      <div className={cx('submit')}>
        <Button onClick={onSubmit} theme={boardIx && 'outline'} >{isEdit ? '수정' : '작성'}하기<img src={ic_check}/></Button>
      </div>
    </div>
  )
}

export default EditorHeader;
