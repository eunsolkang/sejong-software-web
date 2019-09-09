import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import * as boardActions from 'store/modules/board';
import AddBoardModal from 'components/modal/AddBoardModal';
import * as LoginActions from 'store/modules/login';
import { withRouter } from 'react-router-dom';
import queryString from "query-string";

class AddBoardModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  handleCancel = () =>{
    console.log('cancel');
    const { BaseActions } = this.props;
    BaseActions.hideModal('admin');
  }

  handleChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({name : value});
  }
  handleConfirm = async () =>{
    const { BaseActions, BoardActions, jwt, check, location } = this.props;
    const {name} = this.state;
    if (check) {
      const { ix } = queryString.parse(location.search)
      try {
        await BoardActions.editBoard({name, ix}, jwt);
        BaseActions.hideModal('admin');
      } catch(e){
        console.log(e);
      }
    }
    else{
      try {
        await BoardActions.addBoard({name, is_admin : false}, jwt);
        BaseActions.hideModal('admin');
      } catch(e){
        console.log(e);
      }
    }

  }
  render () {
    const { visible, check } = this.props;
    const { handleCancel, handleConfirm,handleChangeInput } = this;

    return (
      <AddBoardModal type={check} visible={visible} onCancel={handleCancel} onConfirm={handleConfirm} onChange={handleChangeInput} />
    )
  }
}

export default connect(
  (state) => ({
    visible : state.base.getIn(['modal', 'admin']),
    jwt : state.login.get('jwt'),
    check : state.base.getIn(['modal', 'check'])

  }),
  (dispatch) => ({
    BaseActions : bindActionCreators(baseActions, dispatch),
    BoardActions : bindActionCreators(boardActions, dispatch),
    LoginActions : bindActionCreators(LoginActions, dispatch)
  })
)(withRouter(AddBoardModalContainer));
