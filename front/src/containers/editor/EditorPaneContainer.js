import React from 'react'

import EditorPane from 'components/editor/EditorPane';
import {bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';
import * as boardActions from 'store/modules/board';

class EditorPaneContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardName: '게시판선택'
    };
  }
  handleChangeInput = ({name, value, type}) => {
    const { EditorActions, jwt } = this.props;
    EditorActions.changeInput({name, value});
  }
  handleChangeMenu = (e) => {
    const { EditorActions } = this.props;
    const { id } = e.target
    this.setState({
      boardName : e.target.name
    })
    console.log(id);
    EditorActions.changeMenu({boardIx : id})
  }

  render () {
    const { boardName } = this.state;
    const { title, markdown, privateCheck, commentCheck, boardIx, boards, anonCheck } = this.props;
    const { handleChangeInput, handleChangeMenu } = this;
    return (
      <EditorPane
        title={title}
        markdown={markdown}
        onChangeInput={handleChangeInput}
        privateCheck={privateCheck}
        anonCheck={anonCheck}
        commentCheck={commentCheck}
        onChangeMenu={handleChangeMenu}
        boardPick={boardName}
        boards={boards}
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
    privateCheck : state.editor.get('privateCheck'),
    anonCheck : state.editor.get('anonCheck'),
    boardIx : state.editor.get('boardIx'),
    boards : state.board.get('boards'),
  }),
  (dispatch) => ({
    EditorActions : bindActionCreators(editorActions, dispatch),
    BoardActions : bindActionCreators(boardActions, dispatch)
  })
)(EditorPaneContainer);
