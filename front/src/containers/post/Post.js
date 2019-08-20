import React from 'react'
import PropTypes from 'prop-types'
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import * as postActions from 'store/modules/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Post extends React.Component {
  initialize = async ()=>{
    const {postActions, id} = this.props;
    try{
      await postActions.getPost(id);
    }catch(e){
      console.log(e);
    }
  }
  componentDidMount(){
    this.initialize();
  }
  render () {
    const { loading, post} = this.props;

    if(loading) return null;

    const { title, contents, createdAt } = post.toJS();

    return (
      <div>
        <PostInfo title={title} publishedDate={createdAt}/>
        <PostBody body={contents}/>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    post: state.post.get('post'),
    loading: state.pender.pending['post/GET_POST']
  }),
  (dispatch) => ({
    postActions: bindActionCreators(postActions, dispatch)
  })
)(Post);
