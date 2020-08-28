import { Action, ActionTypes } from './actions';
import { Reducer } from 'redux';
import { IApplicationState } from '@models';
import { DisplayMode } from '@microsoft/sp-core-library';

const initialState: IApplicationState = {
	title: ''
	, showTitle: true
    , displayMode: DisplayMode.Read
	, webPartContext: undefined
	, sections: []
};

export const appReducer: Reducer<IApplicationState> = (state: IApplicationState = initialState, action: Action): IApplicationState => {
	switch (action.type) {
		case ActionTypes.UPDATE_WEBPARTPROPERTY:
			state = { ...state, [action.propertyName]: action.propertyValue };
			break;
		case ActionTypes.ADD_SECTION:
			state = {
				...state,
				sections: [...state.sections, { heading: null, html: null, id: state.sections.length }]
			};
			break;
		case ActionTypes.UPDATE_SECTIONHEADER:
			state = {
				...state,				
				sections: state.sections.map((s, i) => s.id === action.id ? {...s, heading: action.value } : s)
			};
			break;
		case ActionTypes.UPDATE_SECTIONHTML:
			state = {
				...state,
				sections: state.sections.map((s, i) => s.id === action.id ? { ...s, html: action.value } : s)
			};
			break;
		case ActionTypes.DELETE_SECTION:
			state = {
				...state,
				sections: state.sections.filter( x => x.id !== action.id)
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
