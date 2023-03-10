import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import sagas from './store/sagas';
// import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from 'redux'; // saga kullanılacaksa compose ve applyMiddleware import edilmeli
import storage from 'redux-persist/lib/storage'; // web için varsayılan localstorage
import App from './App';
import { usersReducer } from './usersReducer';

import { configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

// Middleware: persisted reducerımızı oluşturuyoruz.
const persistedReducer = persistReducer(persistConfig, usersReducer)


// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// Middleware: persist store oluşturuyoruz.
let persistor = persistStore(store)


// sagaMiddleware.run(sagas); // 

ReactDOM.render(
  <Provider store={store}>
    <PersistGate  loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);