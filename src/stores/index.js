import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
  nBite: 0
};
export const store = createStore(reducer, initialState);
