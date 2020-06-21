import { createStore, Store } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import throttle from 'lodash/throttle';
import reducer from './reducers';
import { loadState, saveState } from './persistedStorage';

export interface State {
  app: string;
  page: string;
}

const persistedState = loadState();

const store: Store = createStore(reducer, persistedState);

export const makeStore: MakeStore<State> = () => store;
export const wrapper = createWrapper<State>(makeStore, { debug: true });

store.subscribe(throttle(() => {
  saveState({
    basket: {
      items: store.getState().basket.items,
    },
  });
}, 1000));
