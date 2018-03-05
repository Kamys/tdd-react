import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {loadStore} from "./localStorage";
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import reducer from './redux/reducers/Index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    loadStore(), //Use for save state in local store.
    composeWithDevTools(applyMiddleware(sagaMiddleware)));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));