import React from 'react'
import PropTypes from 'prop-types'
import EditorPane from 'components/editor/EditorPane';
import {bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';

class EditorPaneContainer extends React.Component {
  handleChangeInput = ({name, value}) => {
    const { EditorActions } = this.props;
    EditorActions.changeInput({name, value});
  }
  render () {
    const { title, markdown } = this.props;
    const { handleChangeInput } = this;
    console.log(markdown);
    return (
      <EditorPane
        title={title}
        markdown={markdown}
        onChangeInput={handleChangeInput}
      />
    );
  }
}

export default connect(
  (state) => ({
    title : state.editor.get('title'),
    markdown : state.editor.get('markdown'),
  }),
  (dispatch) => ({
    EditorActions : bindActionCreators(editorActions, dispatch)
  })
)(EditorPaneContainer);
