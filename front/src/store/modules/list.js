import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from  'lib/api';

const GET_POST_LIST = 'list/GET_POST_LIST';

export const getPostList = createAction(GET_POST_LIST, api.getPostList);

const initialState = Map({
  posts : List()
});

export default handleActions({
  ...pender({
    type : GET_POST_LIST,
    onSuccess : (state, action) => {
      const { data: posts } = action.payload;
      return state.set('posts', fromJS(posts))
    }
  })
}, initialState);