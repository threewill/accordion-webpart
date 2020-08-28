import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@components/atoms';
import { addSection } from '@redux/actions';

interface IConnectedDispatch{
    addSection: () => void;
}

const component: React.FunctionComponent<IConnectedDispatch > = props => {
    return <Button label="Add Section" icon="Add" onClickHandler={ props.addSection } />;
};

export const AddSectionButton = connect(null, { addSection })(component);