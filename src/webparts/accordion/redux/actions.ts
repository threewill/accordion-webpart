import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { DisplayMode } from "@microsoft/sp-core-library";
import { HttpRequestError } from "@pnp/odata";
import { ISectionItem } from "@models";

export enum ActionTypes {
  UPDATE_WEBPARTPROPERTY = 'UPDATE_WEBPARTPROPERTY',
  UPDATE_WEBPARTCONTEXT = 'UPDATE_WEBPARTCONTEXT',
  UPDATE_WEBPARTDISPLAYMODE = 'UPDATE_WEBPARTDISPLAYMODE',
  UPDATE_WEBPARTTITLE = "UPDATE_WEBPARTTITLE",
  ADD_SECTION = "ADD_SECTION",
  DELETE_SECTION = "DELETE_SECTOIN",
  UPDATE_SECTIONHEADER = "UPDATE_SECTIONHEADER",
  UPDATE_SECTIONHTML = "UPDATE_SECTIONHTML",
  UPDATE_APPLICATION_ERROR_MESSAGE = 'UPDATE_APPLICATION_ERROR_MESSAGE'
}

export type Action =
  { type: ActionTypes.UPDATE_WEBPARTPROPERTY, propertyName: string, propertyValue: any } |
  { type: ActionTypes.UPDATE_WEBPARTCONTEXT, webPartContext: IWebPartContext } |
  { type: ActionTypes.UPDATE_WEBPARTDISPLAYMODE, displayMode: DisplayMode } |
  { type: ActionTypes.UPDATE_WEBPARTTITLE, value: string } |
  { type: ActionTypes.ADD_SECTION } |
  { type: ActionTypes.DELETE_SECTION, id: number } |
  { type: ActionTypes.UPDATE_SECTIONHEADER, id: number, value: string } |
  { type: ActionTypes.UPDATE_SECTIONHTML, id: number, value: string } |
  { type: ActionTypes.UPDATE_APPLICATION_ERROR_MESSAGE, errorMessage: string }
  ;
  
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

export const addSection = () : Action => ({
  type: ActionTypes.ADD_SECTION
});

export const updateSectionHeader = (id: number, value: string) : Action => ({
  type: ActionTypes.UPDATE_SECTIONHEADER,
  id, value
});

export const updateSectionHTML = (id: number, value: string) : Action => ({
  type: ActionTypes.UPDATE_SECTIONHTML,
  id, value
});


export const deleteSection = (id: number) : Action => ({
  type: ActionTypes.DELETE_SECTION,
  id
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
