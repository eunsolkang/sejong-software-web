import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import * as voteActions from 'store/modules/vote';
import AddVoteModal from 'components/modal/AddVoteModal';
import * as LoginActions from 'store/modules/login';
import { withRouter } from 'react-router-dom';
import queryString from "query-string";

class AddVoteModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    console.log('세팅');
  }
  handleCancel = () =>{
    console.log('cancel');
    const { BaseActions, VoteActions  } = this.props;
    VoteActions.clearVote();
    VoteActions.clearVoteItem();
    BaseActions.hideModal('vote');
  }

  handleChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({[name] : value});
  }
  handleConfirm = async () =>{
    const { BaseActions  } = this.props;
    BaseActions.hideModal('vote');
  }
  handleAddVote = async() => {
    const { VoteActions, jwt } = this.props;
    const { title } = this.state

    VoteActions.addVote({title}, jwt);
  }
  handleAddItem = async() => {
    const { VoteActions, jwt, vote_ix } = this.props;
    const { contents } = this.state

    VoteActions.addVoteItem({contents, vote_ix}, jwt);
  }
  getItemList = async() => {
    const { VoteActions, jwt, vote_ix } = this.props;
    VoteActions.getVoteItem({vote_ix}, jwt);
  }
  componentDidUpdate(prevProps, prevState){
    if (prevProps.isAdd !== this.props.isAdd){
      this.getItemList();
    }
  }
  componentDidMount(){
    const { VoteActions } = this.props;
    VoteActions.clearVoteItem();
  }
  render () {
    const { visible, check, add, item_add, voteItems } = this.props;
    const {title} = this.state;
    const { handleCancel, handleConfirm, handleChangeInput, handleAddVote, handleAddItem } = this;

    return (
      <AddVoteModal visible={visible}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        onChange={handleChangeInput}
        onAddVote={handleAddVote}
        onAddItem={handleAddItem}
        voteItems={voteItems}
        add={add}
        item_add={item_add} />
    )
  }
}

export default connect(
  (state) => ({
    visible : state.base.getIn(['modal', 'vote']),
    jwt : state.login.get('jwt'),
    add : state.vote.get('add'),
    vote_ix : state.vote.get('vote_ix'),
    item_add : state.vote.get('item_add'),
    voteItems: state.vote.get('voteItems'),
    isAdd : state.vote.get('isAdd'),

  }),
  (dispatch) => ({
    BaseActions : bindActionCreators(baseActions, dispatch),
    VoteActions : bindActionCreators(voteActions, dispatch),
    LoginActions : bindActionCreators(LoginActions, dispatch)
  })
)(withRouter(AddVoteModalContainer));
