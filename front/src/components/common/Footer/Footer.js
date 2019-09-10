import React from 'react'

import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom'
import logo from 'ic/sejong.png'

class Footer extends React.Component {
  render () {
    return(
      <footer>
        <div className="footer-logo-box">
          <img src={logo} className="footer-logo"/>
        </div>
        <div className="footer-info-box">
          <div className="footer-info">
           010-3038-2380 | sejong1sc@gmail.com | 학생회관 409호
          </div>
          <div className="footer-copyright">
            COPYRIGHT ⓒ 세종대학교 소프트웨어융합대학 번영 학생회 ALL RIGHT RESERVED
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
