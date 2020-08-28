import * as React from 'react';
import { connect } from 'react-redux';
import { DisplayMode } from '@microsoft/sp-core-library';
import { IApplicationState } from '@models';
import { AccordionItemPanel } from 'react-accessible-accordion';
import { TextEditor, ViewContainer } from "@components/atoms";

interface IConnectedState {
    displayMode: DisplayMode;
}

interface ISectionContentProps{
    id: number;
    html: string;
}

const mapStateToProps = ( state: IApplicationState ) => {
    return {
        displayMode: state.displayMode,        
    };
};

const component: React.FunctionComponent<ISectionContentProps & IConnectedState> = props => {
    let content = props.displayMode === DisplayMode.Read ? <ViewContainer html={ props.html } />
    : <TextEditor parentSectionID={props.id} html={ props.html } />; 

    return <AccordionItemPanel>{ content }</AccordionItemPanel>;
};

export const SectionContent = connect(mapStateToProps)(component);

