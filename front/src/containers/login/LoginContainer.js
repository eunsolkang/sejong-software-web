import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from 'store/modules/login';
import Login from 'components/login/Login';
import { withRouter } from 'react-router-dom'

class LoginContainer extends React.Component {
  handleLogin = async () =>{

    const { LoginActions, id, pw, history }= this.props;
    console.log(id, pw);
    try{
      await LoginActions.login({id, pw});
      console.log('로그인 성공');
      history.push('/')

    }catch(e){
      console.log(e);
    }
  }
  handleIdChange = (e) => {
    console.log('아이디 변경');
    const { value } = e.target;
    const { LoginActions } = this.props;
    LoginActions.changeIdInput(value);
  }
  handlePwChange = (e) => {
    console.log('비밀번호 변경');
    const { value } = e.target;
    const { LoginActions } = this.props;
    LoginActions.changePasswordInput(value);
  }
  handleKeyPress = (e) => {
    if(e.key === 'enter'){
      this.handleLogin();
    }
  }

  render () {
    const {
      handleLogin, handleIdChange, handlePwChange, handleKeyPress
    } = this;
    const { error, pw, id}= this.props;
    return (
      <Login
        onLogin={handleLogin} onIdChange={handleIdChange} onPwChange={handlePwChange} onKeyPress={handleKeyPress} userid={id} password={pw}
      />
    )
  }
}

export default connect(
  (state) => ({
    id : state.login.getIn(['loginBox', 'id']),
    pw : state.login.getIn(['loginBox', 'pw']),
    error : state.login.getIn(['loginBox', 'error'])
  }),
  (dispatch) => ({
    LoginActions : bindActionCreators(LoginActions, dispatch)
  })
)(withRouter(LoginContainer));
