import React from 'react'

import EditorPane from 'components/editor/EditorPane';
import {bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';
import * as LoginActions from 'store/modules/editor';

class EditorPaneContainer extends React.Component {
  handleChangeInput = ({name, value, type}) => {
    const { EditorActions, jwt } = this.props;

    EditorActions.changeInput({name, value});
  }
  render () {
    const { title, markdown, privateCheck, commentCheck } = this.props;
    const { handleChangeInput } = this;
    return (
      <EditorPane
        title={title}
        markdown={markdown}
        onChangeInput={handleChangeInput}
        privateCheck={privateCheck}
        commentCheck={commentCheck}
      />
    );
  }
}

export default connect(
  (state) => ({
    title : state.editor.get('title'),
    markdown : state.editor.get('markdown'),
    jwt : state.login.get('jwt'),
    commentCheck : state.editor.get('commentCheck'),
    privateCheck : state.editor.get('privateCheck')
  }),
  (dispatch) => ({
    EditorActions : bindActionCreators(editorActions, dispatch)
  })
)(EditorPaneContainer);
