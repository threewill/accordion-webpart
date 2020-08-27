import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { DisplayMode } from "@microsoft/sp-core-library";
import { HttpRequestError } from "@pnp/odata";
import { ISectionItem } from "@models";

// types of actions that can be performed
export enum ActionTypes {
  UPDATE_WEBPARTPROPERTY = 'UPDATE_WEBPARTPROPERTY',
  UPDATE_WEBPARTCONTEXT = 'UPDATE_WEBPARTCONTEXT',
  UPDATE_WEBPARTDISPLAYMODE = 'UPDATE_WEBPARTDISPLAYMODE',
  UPDATE_WEBPARTTITLE = "UPDATE_WEBPARTTITLE",
  UPDATE_SECTIONS = "UPDATE_SECTIONS",
  UPDATE_APPLICATION_ERROR_MESSAGE = 'UPDATE_APPLICATION_ERROR_MESSAGE'
}

// contracts for those actions
export type Action =
  { type: ActionTypes.UPDATE_WEBPARTPROPERTY, propertyName: string, propertyValue: any } |
  { type: ActionTypes.UPDATE_WEBPARTCONTEXT, webPartContext: IWebPartContext } |
  { type: ActionTypes.UPDATE_WEBPARTDISPLAYMODE, displayMode: DisplayMode } |
  { type: ActionTypes.UPDATE_WEBPARTTITLE, value: string } |
  { type: ActionTypes.UPDATE_SECTIONS, sections: ISectionItem[] } |
  { type: ActionTypes.UPDATE_APPLICATION_ERROR_MESSAGE, errorMessage: string }
  ;

// functions for those actions

const simpleAction = (actionType: ActionTypes) => ({
  type: actionType
});

export const updateWebPartProperty = (propertyName: string, propertyValue: any): Action => ({
  type: ActionTypes.UPDATE_WEBPARTPROPERTY,
  propertyName,
  propertyValue
});

export const updateWebPartContext = (webPartContext: IWebPartContext): Action => ({
  type: ActionTypes.UPDATE_WEBPARTCONTEXT,
  webPartContext
});

export const updateWebPartDisplayMode = (displayMode: DisplayMode): Action => ({
  type: ActionTypes.UPDATE_WEBPARTDISPLAYMODE,
  displayMode
});

export const updateSections = (sections: ISectionItem[]): Action => ({
  type: ActionTypes.UPDATE_SECTIONS,
  sections
});

const updateApplicationErrorMessage = (errorMessage: string): Action => ({
  type: ActionTypes.UPDATE_APPLICATION_ERROR_MESSAGE,
  errorMessage
});


export function handleHttpError(error: HttpRequestError): string {
  switch (error.status) {
    case 403:
      return "HTTP 403: ACCESS DENIED";
    case 404:
      return "HTTP 404: NOT FOUND";
    default:
      return "HTTP " + error.status;
  }
}
