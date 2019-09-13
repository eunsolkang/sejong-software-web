import React from 'react'
import * as commentAction from 'store/modules/comment';
import * as loginActions from 'store/modules/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentEditer from 'components/post/CommentEditer'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string';


class CommentEditerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPrivate : false,
      isAnon : false,
      contents : ''
    };
  }
  initialize = async ()=>{
    const { LoginActions, jwt } = this.props;
    try{
      await LoginActions.checkLogin({jwt});
    }catch(e){
      console.log(e);
    }
  }
  handleSubmit = async() =>{

    const { jwt, CommentActions, match} = this.props;
    const { isPrivate, isAnon, contents } = this.state;
    const { id } = match.params
    const comment = {
      post_ix : id,
      parent_ix: id,
      contents : contents,
      is_anon : isAnon,
      is_private : isPrivate,
      is_comment_parent: false
    };
    try{
      await CommentActions.writeComment(comment, jwt);
    } catch(e){
      console.log(e);
    }
  }
  handleChangeInput = (e) => {
    const { type } = e.target;
    if( type === 'checkbox'){
      const { name, checked } = e.target;
      this.setState({
        [name] : checked
      })
    }
    else{
      const { name, value } = e.target;
      this.setState({
        [name] : value
      })
    }

  }
  componentDidMount(){
    this.initialize();
  }
  render () {
    const {  commentName,logged } = this.props;
    const { handleChangeInput, handleSubmit } = this;
    const { isPrivate, isAnon, contents  } = this.state;
    if(logged){
      return (
        <div>
          <CommentEditer
                  userName={commentName}
                  contents={contents}
                  onChangeInput={handleChangeInput}
                  onSubmit={handleSubmit}
                  isPrivate={isPrivate}
                  isAnon={isAnon}
                  />

        </div>
      )
    }
    else{
      return null;
    }


  }
}

export default connect(
  (state) => ({
    contents : state.comment.get('contents'),
    jwt : state.login.get('jwt'),
    commentName : state.login.get('commentName'),
    logged : state.login.get('logged')
  }),
  (dispatch) => ({
    CommentActions: bindActionCreators(commentAction, dispatch),
    LoginActions: bindActionCreators(loginActions, dispatch)
  })
)(withRouter(CommentEditerContainer));
