import React from 'react'

import EditorPane from 'components/editor/EditorPane';
import {bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';
import * as baseActions from 'store/modules/base';
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
  handleCreateVote = () => {
    const { BaseActions } = this.props;
    const check = false;
    const modalName = 'vote'
    BaseActions.showModal({modalName, check });
  }
  render () {
    const { boardName } = this.state;
    const { title, markdown, privateCheck, commentCheck, boardIx, boards, anonCheck, power } = this.props;
    const { handleChangeInput, handleChangeMenu, handleCreateVote } = this;
    return (
      <EditorPane
        title={title}
        markdown={markdown}
        onChangeInput={handleChangeInput}
        privateCheck={privateCheck}
        anonCheck={anonCheck}
        commentCheck={commentCheck}
        onChangeMenu={handleChangeMenu}
        onCreateVote={handleCreateVote}
        boardPick={boardName}
        boards={boards}
        power={power}
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
    power : state.login.get('power'),
  }),
  (dispatch) => ({
    EditorActions : bindActionCreators(editorActions, dispatch),
    BoardActions : bindActionCreators(boardActions, dispatch),
    BaseActions : bindActionCreators(baseActions, dispatch),
  })
)(EditorPaneContainer);
