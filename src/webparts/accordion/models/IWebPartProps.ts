import { ISectionItem } from './ISectionItem';
import { DisplayMode } from "@microsoft/sp-core-library";

export interface IWebPartProps{
	title: string;   
    showTitle: boolean;
    sections?: ISectionItem[]; 
}