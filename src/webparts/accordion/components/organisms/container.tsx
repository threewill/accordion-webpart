import * as React from 'react';
import { useState } from 'react';
import { DisplayMode } from '@microsoft/sp-core-library';
import { SectionItem } from '../molecules';
import { Accordion } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { IContainerProps } from './IContainerProps';
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './container.module.scss';
import { connect } from 'react-redux';
import { ISectionItem } from '@models';

interface IConnectedState{
  title: string;
  displayMode: DisplayMode;
  sections: ISectionItem[]
}

const mapStateToProps = (state: IConnectedState) => {
  return {
    title: state.title,
    displayMode: state.displayMode,
    sections: state.sections
  }
}

const component: React.FunctionComponent<IContainerProps & IConnectedState> = props => {
  return (
    <div>
      <WebPartTitle
        displayMode={props.displayMode}
        title={props.title}
        className={styles.title}
        updateProperty={ undefined }
      />
      <Accordion>
        {
          props.sections.map((s, index) =>
            <SectionItem heading={s.heading} html={s.html} key={index} />
          )
        }
      </Accordion>
    </div>
  );
};

export const Container = connect(mapStateToProps)(component);

