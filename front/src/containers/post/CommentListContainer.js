import React from 'react'
import * as commentAction from 'store/modules/comment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentList from 'components/post/CommentList'
import { withRouter } from 'react-router-dom'


class CommentListContainer extends React.Component {

  getCommentList = () =>{
    const {CommentActions, match } = this.props;
    const {id} = match.params
    CommentActions.getCommentList({
      id
    });
  }
  componentDidMount(){
    this.getCommentList();
  }
  componentDidUpdate(prevProps, prevState){
    if (prevProps.submit !== this.props.submit){
      this.getCommentList();
    }
  }
  render () {
    const { loading, comments, submit} = this.props;

    if(loading) return null;

    return (
      <div>
        <CommentList comments={comments}/>
      </div>
    )

  }
}

export default connect(
  (state) => ({
    comments : state.comment.get('comments'),
    loading : state.pender.pending['comment/GET_COMMENT_LIST'],
    submit : state.comment.get('submit')
  }),
  (dispatch) => ({
    CommentActions: bindActionCreators(commentAction, dispatch)
  })
)(withRouter(CommentListContainer));
