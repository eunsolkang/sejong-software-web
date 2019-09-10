import React from 'react'

import PostList from 'components/list/PostList';
import Paginaction from 'components/list/Paginaction'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from 'store/modules/list';
import { withRouter } from 'react-router-dom'
import queryString from "query-string";

// const queryString = require('query-string');

class ListContainer extends React.Component {
  getPostList = (boardIx) =>{
    const {ListActions, page, jwt } = this.props;
    if (boardIx) {
      ListActions.getPostList({
        page,
        boardIx,
        jwt
      });
    }
    else{
      const { boardIxPath } = this.props;
      console.log(boardIxPath);
      ListActions.getPostList({
        page,
        boardIx : boardIxPath,
        jwt
      });
    }
  }
  handlePageUp = (page) => {
    const {boardIxPath } = this.props;
    return `?page=${page}&board_ix=${boardIxPath}`;
  }
  handleNextClick = () =>{
    const { history, page } = this.props;
    const { handlePageUp } = this;
    history.push(handlePageUp(page+1))
  }
  componentDidMount(){
    this.initialize()
  }
   handleScroll(){
     console.log('왜안됨 시발');
   }
  handlePageDown = (page) => {
    const { boardIxPath } = this.props;
    return `?page=${page}&board_ix=${boardIxPath}`;
  }
  handlePrevClick = () =>{
    const { history, page } = this.props;
    const { handlePageUp } = this;
    history.push(handlePageUp(page-1))
  }
  componentDidMount(){
    this.getPostList();
  }
  componentDidUpdate(prevProps, prevState){
    if (prevProps.page !== this.props.page){
      this.getPostList();
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    const { board_ix } = queryString.parse(nextProps.location.search)
    if (board_ix !== queryString.parse(this.props.location.search).board_ix){
      console.log('목표를 포착했다');
      this.getPostList(board_ix)
    }
    // const nextProps = queryString.parse(nextProps.location.search);
    // console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    return true;
  }
  render () {
    const { loading, posts, page, count, search } = this.props;
    const { handleNextClick, handlePrevClick} = this;
    if (loading ) return null;

    return (
      <div>
        <PostList posts={posts} search={search}/>
        <Paginaction page={page} onNextClick={handleNextClick} onPrevClick={handlePrevClick} count={count}/>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    posts : state.list.get('posts'),
    loading : state.pender.pending['list/GET_POST_LIST'],
    jwt : state.login.get('jwt'),
    count : state.list.get('count'),
    search : state.base.get('search')
  }),
  (dispatch) => ({
    ListActions : bindActionCreators(listActions, dispatch)
  })
)(withRouter(ListContainer));
