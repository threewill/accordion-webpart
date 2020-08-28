import * as React from 'react';
import * as _ from 'lodash';

export interface IViewContainerProps {
    html: string;
}

export const ViewContainer: React.FunctionComponent<IViewContainerProps> = props => {
    return <div dangerouslySetInnerHTML={{ __html: _.unescape(props.html)}} />;
};