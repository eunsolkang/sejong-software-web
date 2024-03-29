import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api'

const LOGIN = 'login/LOGIN';
const LOGOUT = 'login/LOGOUT';
const CHECK_LOGIN = 'login/CHECK_LOGIN';
const CHANGE_INPUT = 'login/CHANGE_INPUT';
const CHECK_USERINFO = 'login/CHECK_USERINFO'
const CHECK_ADMIN = 'login/CHECK_ADMIN'
const CLEAR_USERINFO = 'login/CLEAR_USERINFO'
const AUTO_LOGIN = 'login/AUTO_LOGIN'

export const login = createAction(LOGIN, api.login);
export const logout = createAction(LOGOUT);
export const checkLogin = createAction(CHECK_LOGIN, api.checkLogin);
export const checkAdmin = createAction(CHECK_ADMIN, api.checkLogin);
export const changeInput = createAction(CHANGE_INPUT);
export const autoLogin = createAction(AUTO_LOGIN);
export const clearUserinfo = createAction(CLEAR_USERINFO);
export const checkUserinfo = createAction(CHECK_USERINFO, api.userInfo)

const initialState = Map({
  loginBox: Map({
    id : '',
    pw : '',
  }),
  autoBox : Map({
    id : '',
    pw : ''
  }),
  logged : false,
  jwt : '',
  commentName : '',
  userName : '',
  power : false,
  userix : ''

});

export default handleActions({
  ...pender({
    type: CHECK_USERINFO,
    onSuccess: (state, action) =>{

      const { name }= action.payload.data.user;
      return state.set('userName', name)
    }
  }),
  ...pender({
    type: CHECK_LOGIN,
    onSuccess: (state, action) =>{
      const { name, id, pw, is_admin }= action.payload.data.info;
      return state.set('commentName', name)
                  .setIn(['autoBox', 'id'], id)
                  .setIn(['autoBox', 'pw'], pw)
    }
  }),
  ...pender({
    type: CHECK_ADMIN,
    onSuccess: (state, action) =>{
      const { is_admin, ix }= action.payload.data.info;
      return state.set('power', is_admin)
                  .set('userix', ix);
    }
  }),
  ...pender({
    type: LOGIN,
    onSuccess: (state, action) =>{
      const { token }= action.payload.data;
      return state.set('logged', true)
                  .set('jwt', token)
    },
    onError : (state, action) => {
      return state.setIn(['loginBox', 'error'], true)
                  .setIn(['loginBox', 'id'], '')
                  .setIn(['loginBox', 'pw'], '');
    }
  }),
  [LOGOUT]: (state, action) => {
    const { jwt } = action.payload;
    return state.set('jwt', '')
                .set('logged', false )
  },
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.setIn(['loginBox', name], value);
  },
  [AUTO_LOGIN] : (state, action) => {
    const { jwt } = action.payload;
    return state.set('jwt', jwt)
                .set('logged', true)
  },
  [CLEAR_USERINFO] : (state, action) => {
    return state.set('userName', '')

  }

}, initialState);
