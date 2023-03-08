import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase!","success")
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText); 
    props.showAlert("Text converted to lowercase!","success")
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!","success")
    };
    
    const handleCopy = () => {
        // var text = document.getElementById('myBox');
        // text.select();
      navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard!","success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    props.showAlert("Extra Spaces has removed from text!","success")
    }

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (  
    <>
      <div className="container" style={{color:props.mode==="dark"?'white':'black'}}>
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="myBox"
            rows="8"
            style={{background:props.mode==="dark"?'black':'white',color:props.mode==="dark"?'white':'black'}}
          ></textarea>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>
           Convert To UpperCase
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleDownClick}>
            Convert To LowerCase
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleClear}>
            Clear Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-3" style={{color:props.mode==="dark"?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>
          Number of words: {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} <br/>
        </p>
          <p> Number of characters: {text.length} </p>
        <p>Reading Time: {0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
      </div> 
      </>
  );
}
