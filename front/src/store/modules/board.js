import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from  'lib/api';

const GET_BOARD_NAME = 'board/GET_BOARD_NAME';
export const getBoardName = createAction(GET_BOARD_NAME, api.getBoardName);
const initialState = Map({

});

export default handleActions({
  ...pender({
    type : GET_BOARD_NAME,
    onSuccess : (state, action) => {
      const { name } = action.payload.data;
      return state.set('name', name)
    }
  })
}, initialState);
