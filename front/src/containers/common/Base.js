import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from 'store/modules/login';

class Base extends React.Component {
  initialize = async() =>{
    const { LoginActions } = this.props;
    if ( localStorage.logged ) {
      try{
        await LoginActions.autoLogin({
                jwt : localStorage.logged
              })
      }catch(e){
        console.log(e);
      }
    }
  }
  componentDidMount(){
    this.initialize()
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    LoginActions : bindActionCreators(loginActions, dispatch),
  })

)(Base);
