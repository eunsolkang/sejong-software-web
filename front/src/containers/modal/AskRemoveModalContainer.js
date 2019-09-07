import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import * as postActions from 'store/modules/post';
import * as LoginActions from 'store/modules/login';
import * as boardActions from 'store/modules/board';
import AskRemoveModal from 'components/modal/AskRemoveModal';
import { withRouter } from 'react-router-dom';
import queryString from "query-string";

class AskRemoveModalContainer extends React.Component {
  handleCancel = () =>{
    const { BaseActions } = this.props;
    BaseActions.hideModal('remove');
  }
  handleConfirm = async () =>{

    const { BaseActions, BoardActions, PostActions, history, match, jwt, location, check } = this.props;
    if (check) {
      const { id } = match.params;
      try {
        await PostActions.removePost({id, jwt})
        BaseActions.hideModal('remove');
        history.push('/');
      } catch(e){
        console.log(e);
      }
    }
    else{
      const { ix } = queryString.parse(location.search)
      try {

        await BoardActions.removeBoard({ix}, jwt)
        BaseActions.hideModal('remove');
      } catch(e){
        console.log(e);
      }
    }

  }
  render () {
    const { visible, check} = this.props;
    const { handleCancel, handleConfirm } = this;

    return (
      <AskRemoveModal visible={visible} onCancel={handleCancel} onConfirm={handleConfirm} type={check} />
    )
  }
}

export default connect(
  (state) => ({
    visible : state.base.getIn(['modal', 'remove']),
    jwt : state.login.get('jwt'),
    check : state.base.getIn(['modal', 'check']),
  }),
  (dispatch) => ({
    BaseActions : bindActionCreators(baseActions, dispatch),
    PostActions : bindActionCreators(postActions, dispatch),
    LoginActions : bindActionCreators(LoginActions, dispatch),
    BoardActions : bindActionCreators(boardActions, dispatch)
  })
)(withRouter(AskRemoveModalContainer));
