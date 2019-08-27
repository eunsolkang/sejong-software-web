import React from 'react'

import styles from './CommentEditer.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button'


const cx = classNames.bind(styles)

class CommentEditer extends React.Component {
  render () {
    const ment = "악성댓글은 형사처벌을 받을 수 있습니다."
    const { onSubmit, onChangeInput, contents, userName } = this.props;
    return (
      <div className={cx('comment-editer')}>
        <div className={cx('textarea-box')}>
          <div className={cx('username')}>{userName}</div>
          <textarea placeholder={ment} name="contents" onChange={onChangeInput} value={contents}/>
        </div>
        <Button onClick={onSubmit}>등록</Button>
      </div>
    )
  }
}

export default CommentEditer;
