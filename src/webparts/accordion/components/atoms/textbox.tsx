import * as React from 'react';
import { TextField } from '@fluentui/react';

export interface ITextFieldProps extends React.AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    text: string;
    placeHolder: string;
    onChangeHandler: (event, newValue) => void;
}

export const TextBox: React.FunctionComponent<ITextFieldProps> = props => {    
    return (
        <TextField className={props.className } required placeholder={props.placeHolder} defaultValue={props.text} onChange={props.onChangeHandler} />
    );
};