import * as React from 'react';
import { AccordionItemHeading, AccordionItemButton } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export interface ISectionHeadingProps{
    text: string;
}

export const SectionHeading: React.FunctionComponent<ISectionHeadingProps> = props => {
    return( 
        <AccordionItemHeading>
            <AccordionItemButton>
                { props.text }
            </AccordionItemButton>
        </AccordionItemHeading>
    );
};