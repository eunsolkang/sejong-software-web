import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from  'lib/api';

const GET_BOARD_NAME = 'board/GET_BOARD_NAME';
const GET_BOARD_LIST = 'board/GET_BOARD_LIST';

export const getBoardName = createAction(GET_BOARD_NAME, api.getBoardName);
export const getBoardList = createAction(GET_BOARD_LIST, api.getBoardList);

const initialState = Map({
  boards : false,
  error : false,
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
    },
    onError : (state, action) => {
      return state.set('error', true)
    }
  })
}, initialState);
