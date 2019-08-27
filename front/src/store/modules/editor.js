import { createAction, handleActions } from 'redux-actions';
import * as api from 'lib/api'

import { Map } from 'immutable';
import { pender } from 'redux-pender';

const GET_POST = 'editor/GET_POST'
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';
const WRITE_POST = 'editor/WRITE_POST';
const EDIT_POST = 'editor/EDIT_POST'

export const getPost = createAction(GET_POST, api.getPost)
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const writePost = createAction(WRITE_POST, api.writePost);
export const editPost = createAction(EDIT_POST, api.editPost);

const initialState = Map({
  title : '',
  markdown: '',
  tags: '',
  postId : null,
  privateCheck : false,
  commentCheck : false
})

export default handleActions({
  [INITIALIZE] : (state, action) => initialState,
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
  },
  ...pender({
    type: WRITE_POST,
    onSuccess: (state, action) => {
      const { ix } = action.payload.data;
      return state.set('postId', ix);
    }
  }),
  ...pender({
    type : GET_POST,
    onSuccess : (state, action ) => {
      const { ix, title, contents } = action.payload.data;
      return state.set('title', title)
                  .set('markdown', contents)
    }
  })
}, initialState);
