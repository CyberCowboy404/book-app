import { createStore } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import reducer from './reducers';

export interface State {
  app: string;
  page: string;
}

export const makeStore: MakeStore<State> = () => createStore(reducer);

export const wrapper = createWrapper<State>(makeStore, { debug: true });
