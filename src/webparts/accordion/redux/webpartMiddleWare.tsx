import { ActionTypes } from './actions';

export const createWebPartMiddleWare = (callback) => {
    return store => next => action => {
        next(action);
        if(
            action.type === ActionTypes.ADD_SECTION || 
            action.type === ActionTypes.DELETE_SECTION ||
            action.type === ActionTypes.UPDATE_SECTIONHEADER ||
            action.type === ActionTypes.UPDATE_SECTIONHTML
        ){
            callback("sections", store.getState().sections);
        }
        else if( action.type === ActionTypes.UPDATE_WEBPARTPROPERTY)
        {
            callback(action.propertyName, action.propertyValue);
        }
        else if( action.type === ActionTypes.UPDATE_WEBPARTTITLE)
        {
            callback("title", action.value);
        }
    };
};