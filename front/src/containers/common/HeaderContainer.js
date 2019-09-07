import React from 'react'

import { withRouter } from 'react-router-dom';
import Header from 'components/common/Header'

import * as baseActions from 'store/modules/base';
import * as loginActions from 'store/modules/login';
import * as boardActions from 'store/modules/board';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';




class HeaderContainer extends React.Component {

  handleLogoutClick = async() =>{
    const {logged, LoginActions, jwt } = this.props;
    if (logged){
      try{
        localStorage.logged = '';
        LoginActions.logout({jwt});
      }catch(e){
        console.log(e);
      }

    }
    return;
  }

  handleRemove = () =>{
    console.log('remove!!');
    const { BaseActions } = this.props;
    const check = true;
    const modalName = 'remove'
    BaseActions.showModal({modalName, check });
  }
  handleSidebarOpen = () =>{
    const { BaseActions, sidebarOpenProps } = this.props;
    sidebarOpenProps ? BaseActions.closeSidebar() : BaseActions.openSidebar()
  }

  render () {
    const { handleRemove, handleLogoutClick, handleSidebarOpen } = this
    const { match, logged, error, boards } = this.props;
    const { id } = match.params;

    return (
      <Header
        postIx={id}
        onRemove={handleRemove}
        onLogout={handleLogoutClick}
        logged={logged}
        error={error}
        onSidebarOpen={handleSidebarOpen}
        boards={boards}
      />
    );
  }
}

export default connect(
  (state) => ({
    logged : state.login.get('logged'),
    boardName : state.board.get('board'),
    error : state.post.get('error'),
    sidebarOpenProps : state.base.get('sidebarOpenProps'),
    jwt : state.login.get('jwt'),
    boards : state.board.get('boards')
  }),
  (dispatch) => ({
    BaseActions : bindActionCreators(baseActions, dispatch),
    LoginActions : bindActionCreators(loginActions, dispatch),
    BoardActions : bindActionCreators(boardActions, dispatch)
  })
)(withRouter(HeaderContainer));
