import React from "react";

 const Editor = (props) => {
        return (
            <div className="Editor-container">
                <label className="Editor-label" for="editor" id="editor-label">Editor:</label>
                <textarea className="Editor-text" id="editor" name="editor" onChange={props.onChange} value={props.markdown}></textarea>
            </div>
        );
    
}

export default Editor;