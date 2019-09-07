import React from 'react'

import EditorHeader from 'components/editor/EditorHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import * as editorActions from 'store/modules/editor';

class EditorHeaderContainer extends React.Component {
  componentDidMount(){
    const { EditorActions , location,jwt } = this.props;
    EditorActions.initialize();
    const { id } = queryString.parse(location.search);
    if( id ) {
      EditorActions.getPost({id, jwt});
    }
  }
  handleGoBack = () =>{
    const { history } = this.props;
    history.goBack();
  }
  componentDidUpdate
  handleSubmit = async() =>{
    const { title, markdown, EditorActions, history,
      location, jwt, commentCheck, privateCheck, boardIx} = this.props;
      console.log(privateCheck, commentCheck);
    const post = {
      board_ix : boardIx,
      title : title,
      contents : markdown,
      is_comment : commentCheck,
      is_private : privateCheck
    };
    try{
      const { id } = queryString.parse(location.search);
      if(id){
        await EditorActions.editPost({id, ...post}, jwt);
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
    const { boardIx } = this.props;
    const {id } = queryString.parse(this.props.location.search);
    return (
      <EditorHeader
        onGoBack={handleGoBack}
        onSubmit={handleSubmit}
        isEdit={id ? true : false}
        boardIx={boardIx}
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
    boardIx : state.editor.get('boardIx'),
  }),
  (dispatch) => ({
    EditorActions : bindActionCreators(editorActions, dispatch)
  })
)(withRouter(EditorHeaderContainer));
