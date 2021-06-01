import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

// this is a form which takes user file input, format checks it and passes in to the ProgressBar component
const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpeg"];
    // take file input 
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        // check that the image is formatted correctly 
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            // if the image is the wrong format store error message so that it can be displayed to user 
            setFile(null);
            setError("please select an image file (png or jpeg)");
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler}></input>
                <span>+</span>
            </label>
            <div className="output">
                {/* show error message if image selection failed, show selected file if it succeeded, file storage happens in <ProgressBar /> */}
                {error && <div className="error">{error} </div>}
                {file && <div> {file.name} </div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;