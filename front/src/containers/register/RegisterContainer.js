import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RegisterActions from 'store/modules/register';
import Register from 'components/register/Register';
import { withRouter } from 'react-router-dom'

class RegisterContainer extends React.Component {
  handleRegister = async () =>{

    const { RegisterActions, id, pw, name,history }= this.props;
    console.log(id, pw);
    try{
      await RegisterActions.register({name, id, pw});
      console.log('회원가입 성공');
      history.push('/')
    }catch(e){
      console.log(e);
    }
  }
  handleIdChange = (e) => {
    console.log('아이디 변경');
    const { value } = e.target;
    const { RegisterActions } = this.props;
    RegisterActions.changeIdInput(value);
  }
  handlePwChange = (e) => {
    console.log('비밀번호 변경');
    const { value } = e.target;
    const { RegisterActions } = this.props;
    RegisterActions.changePasswordInput(value);
  }
  handleNameChange = (e) => {
    console.log('이름 변경');
    const { value } = e.target;
    const { RegisterActions } = this.props;
    RegisterActions.changeNameInput(value);
  }
  handleKeyPress = (e) => {
    if(e.key === 'enter'){
      this.handleRegister();
    }
  }
  render () {
    const {
      handleRegister, handleIdChange, handlePwChange, handleKeyPress, handleNameChange
    } = this;
    const { error, pw, id, name}= this.props;
    return (
      <Register
        onRegister={handleRegister} onNameChange={handleNameChange} onIdChange={handleIdChange} onPwChange={handlePwChange} onKeyPress={handleKeyPress} name={name} userid={id} password={pw} error={error}
      />
    )
  }
}

export default connect(
  (state) => ({
    name : state.register.getIn(['registerBox', 'name']),
    id : state.register.getIn(['registerBox', 'id']),
    pw: state.register.getIn(['registerBox', 'pw']),
    error : state.register.getIn(['registerBox', 'error']),
  }),
  (dispatch) => ({
    RegisterActions : bindActionCreators(RegisterActions, dispatch)
  })
)(withRouter(RegisterContainer));
