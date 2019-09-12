import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import * as boardActions from 'store/modules/board';
import * as editorActions from 'store/modules/editor';

import AddGroupModal from 'components/modal/AddGroupModal';
import * as LoginActions from 'store/modules/login';
import { withRouter } from 'react-router-dom';
import queryString from "query-string";

class AddGroupModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      admin : true
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  handleCancel = () =>{
    console.log('cancel');
    const { BaseActions } = this.props;
    BaseActions.hideModal('group');
  }

  handleChangeInput = (e) => {
    const { name } = e.target;
    const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;

    if(e.target.type === 'checkbox'){
      this.setState({
        admin : value
      })
    }
    else{
      this.setState({
        name : value
      })
    }
  }
  handleChangeMenu = (e) => {
    const { EditorActions } = this.props;
    const { id } = e.target
    console.log(e.target.name);
    this.setState({
      boardName : e.target.name
    })
    console.log(id);
    EditorActions.changeMenu({boardIx : id})
  }
  handleConfirm = async () =>{
    const { BaseActions, BoardActions, jwt, check, location } = this.props;
    const {name} = this.state;
    const {boardName, admin} = this.state;
    if (check) {
      const { ix } = queryString.parse(location.search)
      try {
        await BoardActions.editBoard({name, ix, parent_name:boardName}, jwt);
        BaseActions.hideModal('group');
      } catch(e){
        console.log(e);
      }
    }
    else{
      try {

        await BoardActions.addBoard({name, parent_name:boardName, is_admin : admin}, jwt);
        BaseActions.hideModal('group');
      } catch(e){
        console.log(e);
      }
    }

  }
  render () {
    const { visible, check, boards } = this.props;
    const { handleCancel, handleConfirm,handleChangeInput, handleChangeMenu } = this;
    const { boardName, admin } = this.state
    return (
      <AddGroupModal boardName={boardName} boards={boards} type={check} visible={visible} onCancel={handleCancel} onConfirm={handleConfirm} onChange={handleChangeInput} onChangeMenu={handleChangeMenu} admin={admin}/>
    )
  }
}

export default connect(
  (state) => ({
    visible : state.base.getIn(['modal', 'group']),
    jwt : state.login.get('jwt'),
    check : state.base.getIn(['modal', 'check']),
    boards : state.board.get('boards')

  }),
  (dispatch) => ({
    EditorActions : bindActionCreators(editorActions, dispatch),
    BaseActions : bindActionCreators(baseActions, dispatch),
    BoardActions : bindActionCreators(boardActions, dispatch),
    LoginActions : bindActionCreators(LoginActions, dispatch)
  })
)(withRouter(AddGroupModalContainer));
