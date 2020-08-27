import { createStore, applyMiddleware, Store } from 'redux';
import { createLogger } from 'redux-logger';
import { appReducer } from './reducer';
import { IApplicationState } from '@models';

const loggerMiddleware = createLogger({level:'error'});
export default function configureStore() {
    const appStateStore: Store<IApplicationState, any> = createStore(appReducer,
        applyMiddleware());
            //,loggerMiddleware));
            
    return appStateStore;
}
