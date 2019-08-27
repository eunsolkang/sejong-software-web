import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIND_MODAL';
const OPEN_SIDEBAR = 'base/OPEN_SIDEBAR'
const CLOSE_SIDEBAR = 'base/CLOSE_SIDEBAR'

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const openSidebar = createAction(OPEN_SIDEBAR);
export const closeSidebar = createAction(CLOSE_SIDEBAR);


const initialState = Map({
  modal : Map({
    remove : false
  }),
  sidebarOpenProps : false

});

export default handleActions({
  [SHOW_MODAL] : (state, action) =>{
    const { payload : modalName } = action;
    return state.setIn(['modal', modalName], true);
  },
  [HIDE_MODAL] : (state, action) =>{
    const { payload : modalName } = action;
    return state.setIn(['modal', modalName], false);
  },
  [OPEN_SIDEBAR] : (state, action) =>{
    return state.set('sidebarOpenProps', true);
  },
  [CLOSE_SIDEBAR] : (state, action) =>{
    return state.set('sidebarOpenProps', false);
  }
}, initialState);
