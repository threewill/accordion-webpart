import { IWebPartProps } from "@models";
import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { DisplayMode } from "@microsoft/sp-core-library";

export interface IApplicationState extends IWebPartProps {	
	applicationErrorMessage?: string;
	webPartContext: IWebPartContext;
	displayMode: DisplayMode;
}