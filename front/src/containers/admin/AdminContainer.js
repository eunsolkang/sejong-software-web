import React from 'react'

import { withRouter } from 'react-router-dom';
import Admin from 'components/admin'

import * as baseActions from 'store/modules/base';
import * as loginActions from 'store/modules/login';
import * as boardActions from 'store/modules/board';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AdminContainer extends React.Component {

  handleLogoutClick = async() =>{

  }

  handleRemove = () =>{
  }

  render () {
    const { handleRemove  } = this
    const { boards } = this.props;

    return (
      <Admin
        boards={boards}
      />
    );
  }
}

export default connect(
  (state) => ({
    boards : state.board.get('boards')
  }),
  (dispatch) => ({
    BoardActions : bindActionCreators(boardActions, dispatch)
  })
)(withRouter(AdminContainer));
