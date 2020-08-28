//// Documentation: https://www.tiny.cloud/docs/integrations/react/
import * as React from 'react';
import { connect } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { updateSectionHTML } from '@redux/actions';

interface IConnectedDispatch{
    updateSectionHTML: (id:number, value:string) => void;
}

export interface IEditorProps{
    parentSectionID: number;
    html: string;
}
const initProps = {
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
    ],
    toolbar:
        'undo redo | formatselect | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | help'    
};

const component: React.FunctionComponent<IEditorProps & IConnectedDispatch> = props => {
    const changeHandler = (value) => {
        props.updateSectionHTML(props.parentSectionID, value);
    };
    return (
        <Editor init={initProps} value={props.html} onEditorChange={ changeHandler }/>
    );
};

export const TextEditor = connect(null, { updateSectionHTML })(component);