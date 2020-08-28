import * as React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { DisplayMode } from '@microsoft/sp-core-library';
import { AccordionHeading, TextBox } from '@components/atoms';
import { RemoveSectionButton } from '@components/molecules';
import { updateSectionHeader } from '@redux/actions';
import 'react-accessible-accordion/dist/fancy-example.css';
import styles from './sectionHeading.styles.module.scss';

interface IConnectedState{
    displayMode: DisplayMode;
}

const mapStateToProps = (state: IConnectedState) => {
    return {
        displayMode: state.displayMode
    };
};

interface IConnectedDispatch {
    updateSectionHeader: (id:number, value:string) => void;
}

export interface ISectionHeadingProps{
    text: string;
    parentSectionID: number;
}

const component: React.FunctionComponent<ISectionHeadingProps & IConnectedState & IConnectedDispatch> = props => {
    const isEditable = props.displayMode === DisplayMode.Edit ? true : false;
    
    const changeHandler = (event, value) => {
        props.updateSectionHeader(props.parentSectionID, value);
    };

    const renderEditMode = () => {
        return (
            <div className={ styles.editing } >
                <AccordionHeading />
                <TextBox className={styles.headerTextBox} text={props.text} placeHolder="Header name" onChangeHandler={ changeHandler } />
                <RemoveSectionButton parentSectionID={props.parentSectionID} className={ styles.removeButton } />
            </div>
        );
    };

    const renderViewMode = () => {
        return <AccordionHeading text={props.text} />
    };

    const getButtonContent = () => {
        if(isEditable){
            return renderEditMode();
        }
        else{
            return renderViewMode();
        }
    };

    return( 
        getButtonContent()
    );
};

export const SectionHeading = connect(mapStateToProps, { updateSectionHeader })(component);