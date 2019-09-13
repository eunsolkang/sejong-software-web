import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from  'lib/api';

const GET_VOTE = 'vote/GET_VOTE';
const GET_VOTE_ITEM = 'vote/GET_VOTE_ITEM';
const TO_VOTE = 'vote/TO_VOTE';
const ADD_VOTE = 'vote/ADD_VOTE'
const ADD_VOTE_ITEM = 'vote/ADD_VOTE_ITEM'
const CLEAR_VOTE = 'vote/CLEAR_VOTE'

export const clearVote = createAction(CLEAR_VOTE);
export const getVote = createAction(GET_VOTE, api.getVote);
export const getVoteItem = createAction(GET_VOTE_ITEM, api.getVoteItem, meta=>meta);
export const toVote = createAction(TO_VOTE, api.toVote);
export const addVote = createAction(ADD_VOTE, api.addVote);
export const addVoteItem = createAction(ADD_VOTE_ITEM, api.addVoteItem);

const initialState = Map({
  voteTitle : '',
  voteItems : '',
  submit : false,
  add : false,
  vote_ix : '',
  item_add : true,
  isAdd : false
});

export default handleActions({
  ...pender({
    type : GET_VOTE,
    onSuccess : (state, action) => {
      const { title } = action.payload.data;
      console.log(title);
      return state.set('voteTitle', title)
    }
  }),
  ...pender({
    type : TO_VOTE,
    onSuccess : (state, action) => {
      return state.set('submit', true)
    }
  }),
  ...pender({
    type : ADD_VOTE,
    onSuccess : (state, action) => {
      const { ix } = action.payload.data;
      return state.set('vote_ix', ix)
                  .set('add', true)
                  .set('item_add', false)
    }
  }),
  ...pender({
    type : GET_VOTE_ITEM,
    onSuccess : (state, action) => {
      const { data: voteItems } = action.payload;
      console.log(action.payload);
      return state.set('voteItems', fromJS(voteItems))
                  .set('submit', false)
                  .set('isAdd', false)
    }
  }),
  ...pender({
    type : ADD_VOTE_ITEM,
    onSuccess : (state, action) => {
      return state.set('add', true)
                  .set('isAdd', true)
    }
  }),
  [CLEAR_VOTE]: (state, action) => {

    return state.setIn('vote_ix', null);
  },
}, initialState);
