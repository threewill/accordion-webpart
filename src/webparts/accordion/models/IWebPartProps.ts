import { ISectionItem } from './ISectionItem';

export interface IWebPartProps{
	title: string;   
    showTitle: boolean;
    allowMultipleExpanded: boolean;
    allowZeroExpaned: boolean;
    sections: ISectionItem[];
}