import React from 'react'

import { withRouter } from 'react-router-dom';
import Admin from 'components/admin'

import * as baseActions from 'store/modules/base';
import * as loginActions from 'store/modules/login';
import * as boardActions from 'store/modules/board';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from "query-string";


class AdminContainer extends React.Component {

  getBoardList = async() =>{
    const {BoardActions } = this.props;
    try{
      await BoardActions.getBoardList();
    }catch(e){
      console.log(e);
    }
  }
  handleEdit = (e) => {
    const { BaseActions, history } = this.props;
    const check = true;
    const modalName = 'admin'
    history.push(`?ix=${e.currentTarget.id}`);
    BaseActions.showModal({modalName, check});
  }
  handleAddGroup= () =>{
    const { BaseActions } = this.props;
    const check = false;
    const modalName = 'admin'
    BaseActions.showModal({modalName, check });
  }
  handleAddBoard= () =>{
    const { BaseActions } = this.props;
    const check = false;
    const modalName = 'group'
    BaseActions.showModal({modalName, check });
  }
  handleRemove = (e) => {
    const { BaseActions, history } = this.props;
    const check = false;
    const modalName = 'remove'
    history.push(`?ix=${e.currentTarget.id}`)
    BaseActions.showModal({modalName, check});
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.submit !== this.props.submit){
      this.getBoardList();
    }
  }
  render () {
    const { handleAddBoard, handleRemove, handleUpdate, handleEdit, handleAddGroup  } = this
    const { boards } = this.props;


    return (
      <Admin
        onAdd={handleAddGroup}
        onBoard={handleAddBoard}
        boards={boards}
        onRemove={handleRemove}
        onUpdate={handleEdit}
      />
    );
  }
}

export default connect(
  (state) => ({
    boards : state.board.get('boards'),
    jwt : state.login.get('jwt'),
    submit : state.board.get('submit')
  }),
  (dispatch) => ({
    BoardActions : bindActionCreators(boardActions, dispatch),
    BaseActions : bindActionCreators(baseActions, dispatch)
  })
)(withRouter(AdminContainer));
