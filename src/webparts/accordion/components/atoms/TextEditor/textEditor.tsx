//// Documentation: https://www.tiny.cloud/docs/integrations/react/
import * as React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export interface IEditorProps{
    html: string;
    updateHtml(html: string) : void;
}

const handleEditorChange = (v) => {

}

export const TextEditor: React.FunctionComponent<IEditorProps> = props => {
    return (
        <Editor
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
            height: 500,
            menubar: false,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help'
            }}
            onEditorChange={ handleEditorChange }
        />
    );
};