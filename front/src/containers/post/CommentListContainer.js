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
  handleRemove = (e) => {
    const {CommentActions, jwt } = this.props;
    const id = e.target.name
    CommentActions.removeComment({
      id, jwt
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
    const {  handleRemove } =this;
    if(loading) return null;

    return (
      <div>
        <CommentList comments={comments} onRemove={handleRemove}/>
      </div>
    )

  }
}

export default connect(
  (state) => ({
    comments : state.comment.get('comments'),
    loading : state.pender.pending['comment/GET_COMMENT_LIST'],
    submit : state.comment.get('submit'),
    jwt : state.login.get('jwt')
  }),
  (dispatch) => ({
    CommentActions: bindActionCreators(commentAction, dispatch)
  })
)(withRouter(CommentListContainer));
