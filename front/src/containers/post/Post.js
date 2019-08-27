import React from 'react'

import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import * as postActions from 'store/modules/post';
import * as LoginActions from 'store/modules/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentListContainer from 'containers/post/CommentListContainer'
import CommentEditerContainer from 'containers/post/CommentEditerContainer';
import NotFound from 'components/common/NotFound/NotFound'
import { withRouter } from 'react-router-dom'


class Post extends React.Component {

  initialize = async ()=>{
    const {postActions,LoginActions , id, jwt} = this.props;
    try{
      if (jwt !== ''){
        await postActions.getPost({id, jwt});
        const {post} = this.props;
        const { handleError } = this
        const { user_ix } = post.toJS();
        try{
          await LoginActions.checkUserinfo({user_ix});
        }catch(e){
          console.log(e);
        }
      }
    }catch(e){
      console.log(e);
    }
  }
  componentDidMount(){
    this.initialize();
  }
  render () {
    let typeAuth = "권한이 없습니다";
    const { loading, post, jwt} = this.props;
    if(loading) return null;

    const { title, contents, createdAt, is_comment } = post.toJS();
    const { userName, error, history } = this.props;
    if (jwt){
      return (
        <div>
          <PostInfo title={title} publishedDate={createdAt} userName={userName} error={error}/>
          <PostBody body={contents} error={error}/>
          {
            is_comment && [
              <CommentEditerContainer key={1}/>,
              <CommentListContainer key={2}/>
            ]
          }
        </div>
      )
    }
    else{
      return (
        <div>
          <NotFound type={typeAuth} onGoBack={history.goBack}/>
        </div>
      )
    }

  }
}

export default connect(
  (state) => ({
    post: state.post.get('post'),
    jwt : state.login.get('jwt'),
    loading: state.pender.pending['post/GET_POST'],
    userName : state.login.get('userName'),
    error : state.post.get('error')
  }),
  (dispatch) => ({
    postActions: bindActionCreators(postActions, dispatch),
    LoginActions: bindActionCreators(LoginActions, dispatch)
  })
)(withRouter(Post));
