import React from 'react'
import PropTypes from 'prop-types'
import PostList from 'components/list/PostList';
import Paginaction from 'components/list/Paginaction'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from 'store/modules/list';

class ListContainer extends React.Component {
  getPostList = () =>{
    const {ListActions } = this.props;
    ListActions.getPostList();
  }
  componentDidMount(){
    this.getPostList();
  }
  componentDidUpdate(prevProps, prevState){

  }
  render () {
    const { loading, posts } = this.props;
    if (loading ) return null;

    return (
      <div>
        <PostList posts={posts}/>
        <Paginaction/>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    posts : state.list.get('posts'),
    loading : state.pender.pending['list/GET_POST_LIST']
  }),
  (dispatch) => ({
    ListActions : bindActionCreators(listActions, dispatch)
  })
)(ListContainer);
