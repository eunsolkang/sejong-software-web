import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import Header from 'components/common/Header'

import * as baseActions from 'store/modules/base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class HeaderContainer extends React.Component {

  handleRemove = () =>{
    console.log('remove!!');
    const { BaseActions } = this.props;
    BaseActions.showModal('remove');
  }

  render () {
    const { handleRemove } = this
    const { match } = this.props;

    const { id } = match.params;

    return (
      <Header
        postIx={id}
        onRemove={handleRemove}
      />
    );
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    BaseActions : bindActionCreators(baseActions, dispatch)
  })
)(withRouter(HeaderContainer));
