import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from  'lib/api';

const GET_BOARD_NAME = 'board/GET_BOARD_NAME';
const GET_BOARD_LIST = 'board/GET_BOARD_LIST';
const ADD_BOARD = 'board/ADD_BOARD';
const REMOVE_BOARD = 'board/REMOVE_BOARD';
const EDIT_BOARD = 'board/EDIT_BOARD';

export const getBoardName = createAction(GET_BOARD_NAME, api.getBoardName);
export const getBoardList = createAction(GET_BOARD_LIST, api.getBoardList);
export const addBoard = createAction(ADD_BOARD, api.addBoard);
export const removeBoard = createAction(REMOVE_BOARD, api.removeBoard);
export const editBoard = createAction(EDIT_BOARD, api.editBoard);

const initialState = Map({
  boards : false,
  error : false,
  submit : false,
  name : ''
});

export default handleActions({
  ...pender({
    type : GET_BOARD_NAME,
    onSuccess : (state, action) => {
      const { name } = action.payload.data;
      return state.set('name', name)
    }
  }),
  ...pender({
    type : GET_BOARD_LIST,
    onSuccess: (state, action) => {
      const { data: boards }= action.payload;
      console.log('보드불러오기');
      return state.set('boards', fromJS(boards))
                  .set('error', false)
                  .set('submit', false)
    },
    onError : (state, action) => {
      return state.set('error', true)
    }
  }),
  ...pender({
    type : ADD_BOARD,
    onSuccess: (state, action) => {
      return state.set('submit', true)
    },
    onError : (state, action) => {
      return state.set('error', true)
    }
  }),
  ...pender({
    type : REMOVE_BOARD,
    onSuccess: (state, action) => {
      return state.set('submit', true)
    },
    onError : (state, action) => {
      return state.set('error', true)
    }
  }),
  ...pender({
    type : EDIT_BOARD,
    onSuccess: (state, action) => {
      return state.set('submit', true)
    },
    onError : (state, action) => {
      return state.set('error', true)
    }
  }),
}, initialState);
