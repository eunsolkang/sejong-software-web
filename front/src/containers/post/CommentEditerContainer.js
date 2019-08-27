import React from 'react'
import * as commentAction from 'store/modules/comment';
import * as loginActions from 'store/modules/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentEditer from 'components/post/CommentEditer'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string';


class CommentEditerContainer extends React.Component {
  initialize = async ()=>{
    const { LoginActions, jwt } = this.props;
    try{
      await LoginActions.checkLogin({jwt});
    }catch(e){
      console.log(e);
    }
  }
  handleSubmit = async() =>{

    const { jwt, contents, CommentActions, match} = this.props;
    const { id } = match.params
    const comment = {
      post_ix : id,
      parent_ix: id,
      contents : contents,
      is_anon : false,
      is_private : false,
      is_comment_parent: false
    };
    try{
      await CommentActions.writeComment(comment, jwt);
    } catch(e){
      console.log(e);
    }
  }
  handleChangeInput = (e) => {
    const { onChangeInput } = this.props;
    const { name, value } = e.target;
    const { CommentActions } = this.props;
    CommentActions.changeInput({name, value});
  }
  componentDidMount(){
    this.initialize();
  }
  render () {
    const { contents, commentName } = this.props;
    const { handleChangeInput, handleSubmit } = this;
    return (
      <div>
        <CommentEditer
                userName={commentName}
                contents={contents}
                onChangeInput={handleChangeInput}
                onSubmit={handleSubmit}/>
      </div>
    )

  }
}

export default connect(
  (state) => ({
    contents : state.comment.get('contents'),
    jwt : state.login.get('jwt'),
    commentName : state.login.get('commentName')
  }),
  (dispatch) => ({
    CommentActions: bindActionCreators(commentAction, dispatch),
    LoginActions: bindActionCreators(loginActions, dispatch)
  })
)(withRouter(CommentEditerContainer));
