import { Action, ActionTypes } from './actions';
import { Reducer } from 'redux';
import { IApplicationState } from '@models';
import { DisplayMode } from '@microsoft/sp-core-library';

const initialState: IApplicationState = {
	title: ''
	, showTitle: true
    , displayMode: DisplayMode.Read
    , webPartContext: undefined
};

//Reducer determines how the state should change after every action.
export const appReducer: Reducer<IApplicationState> = (state: IApplicationState = initialState, action: Action): IApplicationState => {
	switch (action.type) {
		case ActionTypes.UPDATE_WEBPARTPROPERTY:
			state = { ...state, [action.propertyName]: action.propertyValue };
			break;
		case ActionTypes.UPDATE_SECTIONS:
			state = {
				...state,
				sections: action.sections,
			};
			break;
		case ActionTypes.UPDATE_WEBPARTDISPLAYMODE:
			state = { ...state, displayMode: action.displayMode };
			break;
		case ActionTypes.UPDATE_WEBPARTCONTEXT:
			state = { ...state, webPartContext: action.webPartContext };
			break;
		case ActionTypes.UPDATE_APPLICATION_ERROR_MESSAGE:
			state = {...state, applicationErrorMessage: action.errorMessage };
			break;
		default:
			break;
	}
	return state;
};
