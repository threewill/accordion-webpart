import * as React from 'react';
import { DisplayMode } from '@microsoft/sp-core-library';
import { Accordion } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
import styles from './container.module.scss';
import { connect } from 'react-redux';
import { ISectionItem } from '@models';
import { AddSectionButton } from '@components/molecules';
import { SectionItem } from '@components/templates';
import { updateWebPartTitle } from '@redux/actions';

interface IConnectedState{
  title: string;
  showTitle: boolean;
  allowMultipleExpanded: boolean;
  allowZeroExpaned: boolean;
  displayMode: DisplayMode;
  sections: ISectionItem[];
}

interface IConnectedDispatch{
  updateWebPartTitle: (value: string) => void;
}

const mapStateToProps = (state: IConnectedState) => {
  return {
    title: state.title,
    showTitle: state.showTitle,
    allowMultipleExpanded: state.allowMultipleExpanded,
    allowZeroExpaned: state.allowZeroExpaned,
    displayMode: state.displayMode,
    sections: state.sections
  };
};

const component: React.FunctionComponent<IConnectedState & IConnectedDispatch> = props => {
  return (
    <div>
      <WebPartTitle displayMode={props.displayMode} title={props.title} className={styles.title} updateProperty={ props.updateWebPartTitle } />
      <Accordion allowMultipleExpanded={props.allowMultipleExpanded} allowZeroExpanded={props.allowZeroExpaned}>
        { props.sections.map( (s) => <SectionItem heading={s.heading} html={s.html} id={ s.id } key={s.id} /> ) }
      </Accordion>
      { props.displayMode === DisplayMode.Edit && <AddSectionButton /> }
      <div>API KEY: {process.env.TINYMCE_API_KEY}</div>
    </div>
  );
};

export const Container = connect(mapStateToProps, { updateWebPartTitle })(component);

