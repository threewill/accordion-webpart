import * as React from 'react';
import { DisplayMode } from '@microsoft/sp-core-library';
import { TextEditor, ViewContainer, SectionHeading } from '../../atoms';
import { AccordionItemPanel, AccordionItem } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { ISectionItem, IApplicationState } from '../../../models';
import { connect } from 'react-redux';

interface IConnectedState {
    displayMode: DisplayMode;
}

const mapStateToProps = (state: IApplicationState) => {
    return {
      displayMode: state.displayMode
    };
  };

const component: React.FunctionComponent<ISectionItem & IConnectedState> = props => {
    let content = props.displayMode === DisplayMode.Read ? <ViewContainer html={ props.html } />
        : <TextEditor html={ props.html } updateHtml={ undefined } />; 
    
    return (
        <AccordionItem>
            <SectionHeading text={ props.heading }/>
            <AccordionItemPanel>
                { content }
            </AccordionItemPanel>
        </AccordionItem>
    );
};

export const SectionItem = connect(mapStateToProps)(component);