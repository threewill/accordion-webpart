import { ISectionItem } from './ISectionItem';

export interface IWebPartProps{
	title: string;   
    showTitle: boolean;
    sections: ISectionItem[];
}