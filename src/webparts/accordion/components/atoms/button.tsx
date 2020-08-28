import * as React from 'react';
import { CommandButton , IIconProps } from '@fluentui/react';

export interface IButtonProps extends React.AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>  {
    label?: string;
    icon?: string;
    iconColor?: string;
    onClickHandler: (event) => void;
}

export const Button: React.FunctionComponent<IButtonProps> = props => {
    const icon: IIconProps = { iconName: props.icon, color: props.iconColor };

    return (
        <CommandButton className={props.className} iconProps={ icon } text={ props.label } onClick={props.onClickHandler}/>
    );
};