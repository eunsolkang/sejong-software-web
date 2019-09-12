import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from  'lib/api';

const GET_COMMENT_LIST = 'comment/GET_COMMENT_LIST';
const CHANGE_INPUT = 'comment/CHANGE_INPUT';
const WRITE_COMMENT = 'comment/WRITE_COMMENT'
const REMOVE_COMMENT = 'comment/REMOVE_COMMENT'

export const getCommentList = createAction(GET_COMMENT_LIST, api.getCommentList);
export const changeInput = createAction(CHANGE_INPUT);
export const writeComment = createAction(WRITE_COMMENT, api.writeComment);
export const removeComment = createAction(REMOVE_COMMENT, api.removeComment);

const initialState = Map({
  comments : List(),
  contents : '',
  postId : 0,
  submit : false
});

export default handleActions({
  ...pender({
    type : GET_COMMENT_LIST,
    onSuccess : (state, action) => {
      const { data: comments } = action.payload;
      return state.set('comments', fromJS(comments))
                  .set('submit', false)
    }
  }),
  ...pender({
    type : WRITE_COMMENT,
    onSuccess : (state, action) => {
      console.log('댓글작성 성공');
      return state.set('contents', '')
                  .set('submit', true)
    }
  }),
  ...pender({
    type : REMOVE_COMMENT,
    onSuccess : (state, action) => {
      console.log('댓글삭제 성공');
      return state.set('submit', true)
    }
  }),

  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
  }
}, initialState);
