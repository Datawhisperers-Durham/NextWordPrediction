
import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from './reducer_config';

export const history = createBrowserHistory();


function configureStoreDev(initialState: any) {
    const reactRouterMiddleware = createRouterMiddleware(history);
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [
        // Add other middleware on this line...

        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
        sagaMiddleware,
        thunk,
        reactRouterMiddleware,
    ];

    const store = createStore(
        rootReducer(history),
        initialState,
        compose(applyMiddleware(...middlewares))
    );

    // sagaMiddleware.run(rootSaga);

    return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreDev : configureStoreDev;

export default configureStore;
