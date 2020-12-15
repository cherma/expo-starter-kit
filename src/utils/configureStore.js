import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from '../reducers';
import rootSaga from '../sagas/root-saga';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
  const store = createStore(createRootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};


