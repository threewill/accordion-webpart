import * as React from 'react';
import { SectionHeading } from '@components/organisms';
import { SectionContent } from '@components/molecules';
import { AccordionItem } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { ISectionItem } from '@models';
import * as _ from "lodash";

export const SectionItem: React.FunctionComponent<ISectionItem> = props => {        
    return (
        <AccordionItem>
            <SectionHeading parentSectionID={ props.id } text={ props.heading } />
            <SectionContent id={ props.id } html={props.html} />
        </AccordionItem>
    );
};