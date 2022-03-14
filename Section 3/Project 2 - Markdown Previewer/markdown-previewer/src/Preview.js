import React from "react";
import {marked} from "marked";

const Preview = (props) => {
    return (
        <div className="Preview-container">
            <label for="preview" id="preview-label">Previewer:</label>
            <section id="preview">
                <p dangerouslySetInnerHTML={{__html: marked.parse(props.markdown)}}>
                </p>
            </section>
        </div>
    );
    
}

export default Preview;