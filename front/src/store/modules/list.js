import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from  'lib/api';

const GET_POST_LIST = 'list/GET_POST_LIST';
const GET_HOT_POST_LIST = 'list/GET_HOT_POST_LIST';


export const getPostList = createAction(GET_POST_LIST, api.getPostList, meta=>meta);
export const getHotPostList = createAction(GET_HOT_POST_LIST, api.getHotPostList, meta=>meta);

const initialState = Map({
  posts : List(),
  count : 0,
  hotPost : List()
});

export default handleActions({
  ...pender({
    type : GET_POST_LIST,
    onSuccess : (state, action) => {
      const { data: posts } = action.payload;
      return state.set('posts', fromJS(posts))
                  .set('count', posts.length)
    }
  }),
  ...pender({
    type : GET_HOT_POST_LIST,
    onSuccess : (state, action) => {
      const { data: hotPost } = action.payload;
      return state.set('hotPost', fromJS(hotPost))

    }
  })
}, initialState);
