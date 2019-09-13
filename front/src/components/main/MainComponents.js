import React from 'react'
import PropTypes from 'prop-types'
import styles from './MainComponents.scss';
import ic_1 from 'ic/fb_logo.png'
import ic_2 from 'ic/kt_logo.png'
import ic_3 from 'ic/bb_logo.png'
import ic_4 from 'ic/is_logo.png'
import main_logo from 'ic/main_logo.png'
import Button from 'components/common/Button';


const MainComponents = (props) => {
  return (
    <div class="main-box">
      <div class="main-header">
        <img src={main_logo}/>
        <div class="title">
          <div class="name">
            젊음을 불태워라 <span>번영[Burn : Young]</span>
          </div>
          <div class="dec">
            제3대 세종대학교 소프트웨어 융합대학 학생회
          </div>
        </div>



      </div>
      <div class="main-wrapper">
        <section>
          <div class="title">

          </div>
          <div class="card-box">
            <div class="card" id="m1">
              <div class="card-img" >
                <img src={ic_1} alt=""/>
              </div>
              <div class="card-link">
                <div class="btn"><a href="https://www.facebook.com/sejong1sc/">Facebook 공식 페이지</a></div>
              </div>
            </div>
            <div class="card" id="m2">
              <div class="card-img" >
                <img src={ic_2} alt=""/>
              </div>
              <div class="card-link">
                <div class="btn" ><a href="https://www.facebook.com/sejong1sc/">카카오톡 플러스 친구</a> </div>
              </div>
            </div>
            <div class="card" id="m3">
              <div class="card-img" >
                <img src={ic_3} alt=""/>
              </div>
              <div class="card-link">
                <div class="btn" ><a href="https://blackboard.sejong.ac.kr/">세종대학교 블랙보드</a></div>
              </div>
            </div>
            <div class="card" id="m4">
              <div class="card-img" >
                <img src={ic_4} alt=""/>
              </div>
              <div class="card-link">
                <div class="btn"><a href="https://instagram.com/sejongsc?igshid=71biufoux7hm">소융대 인스타그렘</a></div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>

  )
}

export default MainComponents
