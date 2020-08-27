import * as React from 'react';
import { useState } from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'AccordionWebPartStrings';
import { Container } from './components/organisms/container';
import { IContainerProps } from './components/organisms/IContainerProps';
import { DisplayMode } from '@microsoft/sp-core-library';
import { IWebPartProps, IApplicationState } from '@models';
import configureStore  from './redux/store';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { updateWebPartProperty, updateWebPartContext, updateWebPartDisplayMode, updateSections } from './redux/actions';

export const store = configureStore();

export interface IAccordionWebPartProps {
  description: string;
}

export default class AccordionWebPart extends BaseClientSideWebPart<IWebPartProps> {  
  private store: Store<IApplicationState, any>;  

  public render(): void {
    // const element: React.ReactElement<IContainerProps> = React.createElement(
    //   Container,
    //   {
    //     title: "Accordion Webpart",
    //     items: [
    //       {
    //         heading: "Item 1 Heading",
    //         html: "<p>Item 1 HTML</p>",
    //         updateHtml: () => { }
    //       }
    //     ]
    //   }
    // );

    const containerComponent: React.ReactElement<IContainerProps> = React.createElement(
      Container
    );
    
    const provider: React.ReactElement<any> = React.createElement(
      Provider, { store: this.store }, containerComponent
    );
    
    ReactDom.render(provider, this.domElement);
  }

  protected onInit(): Promise<void> {  
    this.store = configureStore();
    return super.onInit().then(_ => {      
      // initialize the store with web part property values   
      // this.store.dispatch(updateWebPartProperty('title', this.properties.title));
      // this.store.dispatch(updateWebPartProperty('showTitle', this.properties.showTitle));
      // this.store.dispatch(updateWebPartProperty('sites', this.properties.sections));
      
      // initialize the store with web part context
      this.store.dispatch(updateWebPartContext(this.context));

      // initialize the store with display mode
      this.store.dispatch(updateWebPartDisplayMode(this.displayMode));

      this.store.dispatch(updateSections([
        {
          heading: "Section 1 Heading",
          html: "<p>Hello Section 1</P"
        }]
      ));
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

  protected onDisplayModeChanged(){
    this.render();
  }
}
