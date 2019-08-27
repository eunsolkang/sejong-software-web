import React from 'react'
import PropTypes from 'prop-types'
import styles from './Register.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Register = ({
  userid,
  password,
  name, error, onIdChange, onPwChange, onNameChange, onKeyPress, onRegister
}) => {
  return (
    <div className={cx('form-box')}>
      <div className={cx('form')}>
        <div className={cx('title')}>회원가입</div>
        <div className={cx('description', 'name')}>NAME</div>
        <input autoFocus type="text" placeholder="이름 입력" value={name} onChange={onNameChange} required
          onKeyPress={onKeyPress}/>

        <div className={cx('description', 'id')}>ID</div>
        <input autoFocus type="text" placeholder="아이디 입력" value={userid} onChange={onIdChange} required
          onKeyPress={onKeyPress}/>

        <div className={cx('description', 'password')}>PW</div>
        <input autoFocus type="password" placeholder="비밀번호 입력" value={password} onChange={onPwChange} required
          onKeyPress={onKeyPress}/>
        { error && <div className={cx('error')}>회원가입 실패</div>}
        <div className={cx('login', 'login-btn')} onClick={onRegister}>회원가입</div>
      </div>
    </div>
  )
}

export default Register
