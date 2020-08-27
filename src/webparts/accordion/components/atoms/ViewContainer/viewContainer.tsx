import * as React from 'react';
import * as styles from './viewContainer.styles.module.scss';
import * as _ from 'lodash';

export interface IViewContainerProps {
    html: string;
}

export const ViewContainer: React.FunctionComponent<IViewContainerProps> = props => {
    return <div className={ styles.default.viewContainer } dangerouslySetInnerHTML={{ __html: _.unescape(props.html)}} />;
};