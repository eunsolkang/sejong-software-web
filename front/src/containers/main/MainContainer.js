import React from 'react'

import MainComponents from 'components/main/MainComponents';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from 'store/modules/list';
import { withRouter } from 'react-router-dom'
import queryString from "query-string";

// const queryString = require('query-string');

class MainContainer extends React.Component {
  getPostList = async() =>{
    const { ListActions } = this.props;
    try{
      await ListActions.getHotPostList();
    }catch(e){
      console.log(e);
    }
  }

  componentDidMount(){
    this.getPostList();
  }

  render () {
    const { hotPost } = this.props;
    return (
      <MainComponents hotPost={hotPost}/>
    )
  }
}

export default connect(
  (state) => ({
    hotPost : state.list.get('hotPost')
  }),
  (dispatch) => ({
    ListActions : bindActionCreators(listActions, dispatch)
  })
)(withRouter(MainContainer));
