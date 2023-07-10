//  rfc: for react function based components
import React, { useState } from 'react'
//  text is a  variable which has a default value and it will be updated with the next function to it 
// the variable will be updated wherever it iwll beused in a page 
export default function Textform(props) {
  const handleUpClick = () => {
    console.log("upper case as clicked")
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upper case" , "success")
  }

  const handleLowClick = () => {
    console.log("upper case as clicked")
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted  to lower case" , "success")
  }
  const handleCopyClick = () => {
    console.log("its copy clicked");
    const element = document.querySelector('#myBox');
    element.select();
    element.setSelectionRange(0, 99999);
    document.execCommand('copy');
    props.showAlert("copied!", "success")

  }
  const handleClearClick = () => {
    console.log("its clear clicked");
    let newText = "";
    setText(newText)
    props.showAlert("Copied!" ,"success")

  }
  const handleHCopyClick = () => {
    const element = document.querySelector('#txt');
    let newElement =  document.createElement('textarea');
    newElement.value = element.innerHTML;
    element.appendChild(newElement)
    newElement.select();
    newElement.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(newElement)

    props.showAlert("ok u copied from the preview!", "success")
  }
  const handleOnChnage = (event) => {
    //  an event for chnaging
    //  changing new value  to our text 
    console.log("the text is " + text)
    setText(event.target.value)
  }

  // states
  const [text, setText] = useState('Enter text here');
  // setText('new text');
  return (
    <>
      <div className="container" style={{color: props.mode==='dark' ? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChnage} style={{backgroundColor: props.mode==='dark' ? '#292828': 'white' ,  color: props.mode==='dark' ? 'white': 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark' ? 'white': 'black'}}>
        <h1>Your text summary</h1>
        {/* word counters */}
        <p>{text.split(" ").length} words in your text and {text.length} characters </p>
        {/* how much time the user will take to read */}
        <p>{0.008 * text.split(" ").length} minutes will take you to read </p>
        <h2>Preview</h2>
        <p id='txt'> {text.length > 0 ? text : "Enter something to preview here"} </p>
        <button className="btn btn-primary mx-2" onClick={handleHCopyClick}>Copy Text</button>
      </div>
    </>
  )
}

//  state is a variable that react will automatically launch
//  state is a situutaion like if i write something on the text area or erase it
//  hooks give you the features of class without amking a class
//  u cant update a variable of text here like u use to update a variable in js but here u will make a functino and iwll update through it
//there is always a need to update the state so thats why we make this onChange function