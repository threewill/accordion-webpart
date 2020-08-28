import { createStore, applyMiddleware, Store } from 'redux';
import { createLogger } from 'redux-logger';
import { appReducer } from './reducer';
import { createWebPartMiddleWare } from './webpartMiddleWare';
import { IApplicationState } from '@models';

const loggerMiddleware = createLogger({level:'error'});

export default function configureStore(callback) {
    const webPartMiddleWare = createWebPartMiddleWare(callback);
    const appStateStore: Store<IApplicationState, any> = createStore(appReducer,
        applyMiddleware(webPartMiddleWare, loggerMiddleware));
            //,loggerMiddleware));
            
    return appStateStore;
}
