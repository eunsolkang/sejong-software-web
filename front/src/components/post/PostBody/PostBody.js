import React from 'react'

import classNames from 'classnames/bind';
import styles from './PostBody.scss'
import MarkdownRender from 'components/common/MarkdownRender';
import VoteContainer from 'containers/vote/VoteContainer'

const cx = classNames.bind(styles);

const PostBody = ({body, error, vote_ix}) => {
  console.log("투표이름", vote_ix);
  return (
    <div className={cx('post-body')}>
      <div className={cx('paper')}>
        {error ?  <div>ERROR :: 권한없음</div> :<MarkdownRender markdown={body}/>}
        
        {(vote_ix !== -1) && (<VoteContainer vote_ix={vote_ix}>

        </VoteContainer>)}
      </div>
    </div>
  )
}

export default PostBody;
