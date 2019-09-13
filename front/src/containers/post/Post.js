import React from 'react'

import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import * as postActions from 'store/modules/post';
import * as LoginActions from 'store/modules/login';
import * as baseActions from 'store/modules/base';
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
        if(jwt) {
          await postActions.getPost({id, jwt});
        }
        else {
          await postActions.getPost({id});
        }
        const {post} = this.props;
        const { handleError } = this
        const { user_ix } = post.toJS();
        if (user_ix !== -1){
          try{
            console.log(user_ix);
            await LoginActions.checkUserinfo({user_ix});
          }catch(e){
            console.log(e);
          }
        }
        else{
          await LoginActions.clearUserinfo();
        }

    }catch(e){
      console.log(e);
    }
  }
  handleRemove = () =>{
    console.log('remove!!');
    const { BaseActions } = this.props;
    const check = true;
    const modalName = 'remove'
    BaseActions.showModal({modalName, check });
  }
  componentDidMount(){
    this.initialize();
  }
  render () {
    let typeAuth = "권한이 없습니다";
    const { loading, post, jwt} = this.props;
    if(loading) return null;

    const { title, contents, createdAt, is_comment, board_ix, user_ix } = post.toJS();
    const { userName, error, history, logged, match, userix, power } = this.props;
    const {handleRemove } = this;
    const { id } = match.params;
    if (jwt || (board_ix === 13 || board_ix === 14 || board_ix === 15 || board_ix === 16 || board_ix == 10 || board_ix === 11)){
      return (
        <div>
          <PostInfo
            title={title}
            publishedDate={createdAt}
            userName={userName}
            error={error}
            onRemove={handleRemove}
            logged={logged}
            postIx={id}
            publisher={user_ix}
            userix={userix}
            power={power}

          />
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
    error : state.post.get('error'),
    userix : state.login.get('userix'),
    logged : state.login.get('logged'),
    power : state.login.get('power'),
  }),
  (dispatch) => ({
    postActions: bindActionCreators(postActions, dispatch),
    LoginActions: bindActionCreators(LoginActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(withRouter(Post));
