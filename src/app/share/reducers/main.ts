import {
  MainTypes,
} from '../actions/main'
import {createReducer} from '../../utils'
import { ActionReducer, Action } from '@ngrx/store';

export const initialState={
  currentPage:1,
  articles:[]
};
//
// export const INCREMENT = 'INCREMENT';
// export const DECREMENT = 'DECREMENT';
// export const RESET = 'RESET';
//
// export const main=createReducer(MainTypes);

export function mainReducer(state=initialState,action){
  const values=Object.keys(MainTypes).map(key=>MainTypes[key]);
  return values
    .map(type=>action.type===type?action.payload:{})
    .reduce((pre,next)=>({...pre,...next}),state)}

// export function mainReducer(state: number = 0, action: Action) {
//   switch (action.type) {
//     case INCREMENT:
//       return state + 1;
//
//     case DECREMENT:
//       return state - 1;
//
//     case RESET:
//       return 0;
//
//     default:
//       return state;
//   }
// }
