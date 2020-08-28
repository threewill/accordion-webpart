import * as React from 'react';
import { Button } from '@components/atoms';
import { connect } from 'react-redux';
import { deleteSection } from '@redux/actions';
import * as _ from "lodash";

interface IConnectedDispatch{
    deleteSection: ( parentSectionID: number ) => void;
}

export interface IRemoveSectionButtonProps {
    parentSectionID: number;
    className: string;
}

const component: React.FunctionComponent<IRemoveSectionButtonProps & IConnectedDispatch> = props => {
    const onclick = () => {        
        props.deleteSection( props.parentSectionID );
    };

    return <Button className={ props.className } label="" icon="Delete" onClickHandler={ onclick }/>;
};

export const RemoveSectionButton = connect(null, { deleteSection })(component);

