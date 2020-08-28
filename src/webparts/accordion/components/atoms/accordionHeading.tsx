import * as React from 'react';
import { AccordionItemHeading, AccordionItemButton } from 'react-accessible-accordion';

export interface IAccordionHeadingProps {
    text?: string;
}

export const AccordionHeading: React.FunctionComponent<IAccordionHeadingProps> = props => {
    return (<AccordionItemHeading>
        <AccordionItemButton style={{width: 'auto'}}>
            { props.text }
        </AccordionItemButton>
    </AccordionItemHeading>
    );
};