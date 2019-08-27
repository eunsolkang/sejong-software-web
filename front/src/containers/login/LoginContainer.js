import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from 'store/modules/login';
import Login from 'components/login/Login';
import { withRouter } from 'react-router-dom';
import storage from 'lib/storage';

class LoginContainer extends React.Component {
  handleLogin = async () =>{

    const { LoginActions, id, pw, history, error} = this.props;
    try{
      await LoginActions.login({id, pw});
      const {jwt, logged } = this.props;
      localStorage.logged = jwt;
      history.push('/')
    }catch(e){
      console.log(e);
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    const { LoginActions } = this.props;
    LoginActions.changeInput({name, value});
  }
  handleKeyPress = (e) => {
    if(e.key === 'enter'){
      this.handleLogin();
    }
  }

  render () {
    const {
      handleLogin, handleChange, handleKeyPress
    } = this;
    const { error, pw, id}= this.props;
    return (
      <Login
        onLogin={handleLogin} onChange={handleChange} onKeyPress={handleKeyPress} userid={id} password={pw} error={error}
      />
    )
  }
}

export default connect(
  (state) => ({
    id : state.login.getIn(['loginBox', 'id']),
    pw : state.login.getIn(['loginBox', 'pw']),
    error : state.login.getIn(['loginBox', 'error']),
    jwt : state.login.get('jwt'),
    logged : state.login.get('logged'),
  }),
  (dispatch) => ({
    LoginActions : bindActionCreators(LoginActions, dispatch)
  })
)(withRouter(LoginContainer));
