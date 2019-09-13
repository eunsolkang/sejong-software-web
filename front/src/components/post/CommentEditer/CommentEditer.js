import React from 'react'

import styles from './CommentEditer.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button'
import Toggle from 'react-toggle'

const cx = classNames.bind(styles)

class CommentEditer extends React.Component {
  render () {
    const ment = "악성댓글은 형사처벌을 받을 수 있습니다."
    const { onSubmit, onChangeInput, contents, userName, isPrivate, isAnon } = this.props;
    return (
      <div className={cx('comment-editer')}>
        <div className={cx('textarea-box')}>
          <div className={cx('username-box')}>
            <div className={cx('username')}>
              {userName}
            </div>
            <div className={cx('username-option')}>
              <div className={cx('comment-able')}>
                <label>
                  <span>비밀글</span>
                  <Toggle
                    name="isPrivate"
                    type="checkbox"
                    cheked={isPrivate}
                    defaultChecked={isPrivate}
                    onChange={onChangeInput}

                    />
                </label>
              </div>
              <div className={cx('comment-able')}>
                <label>
                  <span>익명</span>
                  <Toggle
                    name="isAnon"
                    type="checkbox"
                    cheked={isAnon}
                    defaultChecked={isAnon}
                    onChange={onChangeInput}

                    />
                </label>
              </div>
            </div>
          </div>
          <textarea placeholder={ment} name="contents" onChange={onChangeInput} value={contents}/>
        </div>
        <Button onClick={onSubmit}>등록</Button>
      </div>
    )
  }
}

export default CommentEditer;
