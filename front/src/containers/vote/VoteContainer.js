import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as voteActions from 'store/modules/vote';
import Vote from 'components/vote/Vote'
import { withRouter } from 'react-router-dom'

class VoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote_item_ix : 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  initialize = async ()=>{
    const { vote_ix, VoteActions} = this.props;
    try{
      await VoteActions.getVote({vote_ix})
    }catch(e){
      console.log(e);
    }
    this.getVoteItem();

  }
  getVoteItem = async() =>{
    const { vote_ix, VoteActions} = this.props;
    try {
      await VoteActions.getVoteItem({vote_ix})
    }catch(e){
      console.log(e);
    }
  }
  componentDidMount(){
    this.initialize();
  }
  handleVote= async()=>{
    const { vote_item_ix } = this.state;
    const { VoteActions, jwt} = this.props;
    try{
      await VoteActions.toVote({vote_item_ix}, jwt);
    }catch(e){
      console.log(e);
    }
  }
  handleChange(e){
    const { id } = e.target;

    this.setState({
      vote_item_ix : id
    })
  }
  componentDidUpdate(prevProps, prevState){
    if (prevProps.submit !== this.props.submit){
      this.getVoteItem();
    }
  }
  render () {

    const {voteItems, voteTitle}= this.props;
    const {handleChange,  handleVote} = this;
    console.log(voteItems, voteTitle);
    return (
      <Vote
        voteItems={voteItems}
        title={voteTitle}
        onChange={handleChange}
        onVote={handleVote}
      />
    )
  }
}

export default connect(
  (state) => ({
    voteTitle : state.vote.get('voteTitle'),
    voteItems : state.vote.get('voteItems'),
    submit : state.vote.get('submit'),
    jwt :  state.login.get('jwt'),
  }),
  (dispatch) => ({
    VoteActions : bindActionCreators(voteActions, dispatch)
  })
)(withRouter(VoteContainer));
