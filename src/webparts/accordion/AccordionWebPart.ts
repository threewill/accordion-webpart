import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as strings from 'AccordionWebPartStrings';
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { Container } from '@components/pages';
import { DisplayMode } from '@microsoft/sp-core-library';
import { IWebPartProps, IApplicationState, ISectionItem } from '@models';
import configureStore  from '@redux/store';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { updateWebPartProperty, updateWebPartContext, updateWebPartDisplayMode } from '@redux/actions';

export interface IAccordionWebPartProps {
  title: string;
  description: string;
  sections: ISectionItem[];
}

export default class AccordionWebPart extends BaseClientSideWebPart<IWebPartProps> {  
  private store: Store<IApplicationState, any>;  

  public render(): void {
    const containerComponent: React.ReactElement = React.createElement(
      Container
    );
    
    const provider: React.ReactElement<any> = React.createElement(
      Provider, { store: this.store }, containerComponent
    );
    
    ReactDom.render(provider, this.domElement);
  }

  protected onInit(): Promise<void> {  
    this.store = configureStore(this.saveProperties.bind(this));
    return super.onInit().then(_ => {
      this.store.dispatch(updateWebPartProperty('title', this.properties.title));
      this.store.dispatch(updateWebPartProperty('showTitle', this.properties.showTitle));
      this.store.dispatch(updateWebPartProperty('sections', this.properties.sections));
      this.store.dispatch(updateWebPartContext(this.context));
      this.store.dispatch(updateWebPartDisplayMode(this.displayMode));      
    });
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }

  protected onDisplayModeChanged(displayMode:DisplayMode){
    this.store.dispatch(updateWebPartDisplayMode(displayMode));
  }

  private saveProperties(propertyName: string, propertyValue:any){
    this.properties[propertyName] = propertyValue;
  }
}
