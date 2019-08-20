import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from 'store/modules/base';

class Base extends React.Component {
  initialize = async() =>{
    const { LoginActions } = this.props;
  }
  componentDidMount(){

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
    BaseActions : bindActionCreators(baseActions, dispatch)
  })
)(Base);
