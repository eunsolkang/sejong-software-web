import React from 'react'

import EditorHeader from 'components/editor/EditorHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import * as editorActions from 'store/modules/editor';

class EditorHeaderContainer extends React.Component {
  componentDidMount(){
    const { EditorActions , location } = this.props;
    EditorActions.initialize();
    const { id } = queryString.parse(location.search);
    if( id ) {
      EditorActions.getPost(id);
    }
  }
  handleGoBack = () =>{
    const { history } = this.props;
    history.goBack();
  }

  handleSubmit = async() =>{
    const { title, markdown, EditorActions, history,
      location, jwt, commentCheck, privateCheck} = this.props;
      console.log(privateCheck, commentCheck);
    const post = {
      board_ix : 2,
      title : title,
      contents : markdown,
      is_comment : commentCheck,
      is_private : privateCheck
    };
    try{
      const { id } = queryString.parse(location.search);
      if(id){
        await EditorActions.editPost({id, ...post});
        history.push(`/post/${id}`);
        return;
      }
      await EditorActions.writePost(post, jwt);
      history.push(`/post/${this.props.postId}`);
    } catch(e){
      console.log(e);
    }
  }
  render () {
    const { handleGoBack, handleSubmit } = this;
    const {id } = queryString.parse(this.props.location.search);
    return (
      <EditorHeader
        onGoBack={handleGoBack}
        onSubmit={handleSubmit}
        isEdit={id ? true : false}
      />
    );
  }
}

export default connect(
  (state) => ({
    title : state.editor.get('title'),
    markdown : state.editor.get('markdown'),
    postId : state.editor.get('postId'),
    jwt : state.login.get('jwt'),
    commentCheck : state.editor.get('commentCheck'),
    privateCheck : state.editor.get('privateCheck'),

  }),
  (dispatch) => ({
    EditorActions : bindActionCreators(editorActions, dispatch)
  })
)(withRouter(EditorHeaderContainer));
