import React,{useState} from 'react'

export default function TextForms(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clcicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase", "success");
    };
    const handleLoClick = () => {
        // console.log("Uppercase was clcicked" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase", "success");
    };
    const handleClearClick = () => {  // This function is required as we were not able to edit the text area
        // console.log("On Change was clcicked");
        setText('');
        props.showAlert("Text cleared", "success");
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");
    }
    const handleOnChange = (event) => {  // This function is required as we were not able to edit the text area
        // console.log("On Change was clcicked");
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    // text = "new text"; // Wrong way to change the state
    // setText("new text");  // Correct way to change the state
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
            </div>

            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-secondary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-info mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-danger mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s + /).filter((ele) => {return ele.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008*text.split(" ").filter((ele) => {return ele.length!==0}).length} Minutes read.</p>

            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something to preview"}</p>
        </div>
        </>
    )
}
