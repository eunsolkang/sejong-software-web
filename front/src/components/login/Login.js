import React from 'react'

import styles from './Login.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Login = ({
  userid,
  password, error, onLogin, onChange, onKeyPress, onRegister
}) => {
  return (
    <div className={cx('form-box')}>
      <div className={cx('form')}>
        <div className={cx('title')}>로그인</div>
        <div className={cx('description')}>ID</div>
        <input autoFocus name="id" type="text" placeholder="아이디 입력" value={userid} onChange={onChange}
          onKeyPress={onKeyPress}/>
        <div className={cx('description', 'password')}>PW</div>
        <input name="pw" autoFocus type="password" placeholder="비밀번호 입력" value={password} onChange={onChange}
          onKeyPress={onKeyPress}/>
        { error && <div className={cx('error')}>로그인 실패</div>}
        <div className={cx('login', 'login-btn')} onClick={onLogin}>로그인</div>
        <div className={cx('register')} onClick={onRegister}>계정이 없다면? <a href="./register">계정만들기</a></div>
      </div>
    </div>
  )
}

export default Login
