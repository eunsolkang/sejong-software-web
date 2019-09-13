import React from 'react'
import PropTypes from 'prop-types'
import styles from './Vote.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Vote = ({voteItems, title, onVote, onChange}) => {
  const voteItemList = voteItems && voteItems.map(
    (item) => {
      const {ix, vote_ix, contents, count} = item.toJS();
      const divStyle = {
        width : (count * 50) +"px"
      }
      return(
        <div className={cx('vote-item')} key={ix}>
          <div className={cx('vote-item-name')}>
            {contents}
          </div>
          <input name="voteItem" type="radio" id={ix} onChange={onChange}/>
          <div className={cx('vote-item-stick')} style={divStyle}></div>
          <div className={cx('vote-item-result')}>{count}</div>
        </div>
      )
    }
  )
  var divStyle = {
    width : "200px"
  }
  return (
    <div className={cx('vote')}>
      <div className={cx('title')}>{title}</div>
      <div className={cx('vote-index')}>
        {voteItemList}
      </div>
      <div className={cx('vote-submit')} onClick={onVote}>제출</div>
    </div>
  )
}

export default Vote
