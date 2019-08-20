import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api'

const LOGIN = 'login/LOGIN';
const LOGOUT = 'login/LOGOUT';
const CHECK_LOGIN = 'login/CHECK_LOGIN';
const CHANGE_ID_INPUT = 'login/CHANGE_ID_INPUT';
const CHANGE_PASSWORD_INPUT = 'login/CHANGE_PASSWORD_INPUT';

export const login = createAction(LOGIN, api.login);
export const logout = createAction(LOGOUT, api.logout);
export const checkLogin = createAction(CHECK_LOGIN, api.checkLogin);
export const changePasswordInput = createAction(CHANGE_PASSWORD_INPUT);
export const changeIdInput = createAction(CHANGE_ID_INPUT);

const initialState = Map({
  loginBox: Map({
    id : '',
    pw : '',
  }),
  logged : false,
  jwt : false

});

export default handleActions({
  ...pender({
    type: LOGIN,
    onSuccess: (state, action) =>{
      const { token }= action.payload.data;
      console.log(token);
      return state.set('logged', true)
                  .set('jwt', token)
    },
    onError : (state, action) => {
      return state.setIn(['loginBox', 'error'], true)
                  .setIn(['loginBox', 'id'], '')
                  .setIn(['loginBox', 'pw'], '');
    }
  }),
  ...pender({
    type : CHECK_LOGIN,
    onSuccess: (state, action) => {
      const { logged } = action.payload.data;
      return state.set('logged', logged);
    }
  }),
  [CHANGE_ID_INPUT]: (state, action) => {
    const { payload : value} = action;
    return state.setIn(['loginBox', 'id'], value);
  },
  [CHANGE_PASSWORD_INPUT]: (state, action) => {
    const { payload : value} = action;
    return state.setIn(['loginBox', 'pw'], value);
  }

}, initialState);
