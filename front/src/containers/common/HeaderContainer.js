import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import Header from 'components/common/Header'

import * as baseActions from 'store/modules/base';
import * as loginActions from 'store/modules/base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class HeaderContainer extends React.Component {


  handleLogoutClick = async() =>{
    console.log('test');
    const { LoginActions, logged } = this.props;
    if (logged){
      try{
        // await LoginActions.logout();
        window.location.reload();
      }catch(e){
        console.log(e);
      }

    }
    return;
  }
  handleRemove = () =>{
    console.log('remove!!');
    const { BaseActions } = this.props;
    BaseActions.showModal('remove');
  }

  render () {
    const { handleRemove, handleLogoutClick } = this
    const { match, logged } = this.props;


    const { id } = match.params;

    return (
      <Header
        postIx={id}
        onRemove={handleRemove}
        onLogout={handleLogoutClick}
        logged={logged}
      />
    );
  }
}

export default connect(
  (state) => ({
    logged : state.login.get('logged')
  }),
  (dispatch) => ({
    BaseActions : bindActionCreators(baseActions, dispatch),
    LoginActions : bindActionCreators(loginActions, dispatch)

  })
)(withRouter(HeaderContainer));
