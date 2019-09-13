import React from 'react'

import { withRouter } from 'react-router-dom';
import Admin from 'components/admin'

import * as baseActions from 'store/modules/base';
import * as loginActions from 'store/modules/login';
import * as boardActions from 'store/modules/board';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from "query-string";
import NotFound from 'components/common/NotFound'


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
    const { boards, power , history} = this.props;
    let type_not = "접근권한이 없습니다."

    if(power){
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
    else{
      return(
        <NotFound onGoBack={history.goBack} type={type_not}/>
      )

    }


  }
}

export default connect(
  (state) => ({
    boards : state.board.get('boards'),
    jwt : state.login.get('jwt'),
    submit : state.board.get('submit'),
    power : state.login.get('power'),

  }),
  (dispatch) => ({
    BoardActions : bindActionCreators(boardActions, dispatch),
    BaseActions : bindActionCreators(baseActions, dispatch)
  })
)(withRouter(AdminContainer));
