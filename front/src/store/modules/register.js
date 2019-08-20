import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api'

const REGISTER = 'register/REGISTER';
const CHANGE_NAME_INPUT = 'register/CHANGE_NAME_INPUT';
const CHANGE_ID_INPUT = 'register/CHANGE_ID_INPUT';
const CHANGE_PASSWORD_INPUT = 'register/CHANGE_PASSWORD_INPUT';

export const register = createAction(REGISTER, api.register);
export const changePasswordInput = createAction(CHANGE_PASSWORD_INPUT);
export const changeNameInput = createAction(CHANGE_NAME_INPUT);
export const changeIdInput = createAction(CHANGE_ID_INPUT);

const initialState = Map({
  registerBox: Map({
    name : '',
    id : '',
    pw : ''
  }),
});

export default handleActions({
  ...pender({
    type: REGISTER,
    onSuccess: (state, action) =>{

    },
    onError : (state, action) => {
      return state.setIn(['registerBox', 'name'], '')
                  .setIn(['registerBox', 'id'], '')
                  .setIn(['registerBox', 'pw'], '');
    }
  }),
  [CHANGE_NAME_INPUT]: (state, action) => {
    const { payload : value} = action;
    return state.setIn(['registerBox', 'name'], value);
  },
  [CHANGE_ID_INPUT]: (state, action) => {
    const { payload : value} = action;
    return state.setIn(['registerBox', 'id'], value);
  },
  [CHANGE_PASSWORD_INPUT]: (state, action) => {
    const { payload : value} = action;
    return state.setIn(['registerBox', 'pw'], value);
  },

}, initialState);
