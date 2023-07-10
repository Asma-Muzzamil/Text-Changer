import React from "react";

function Alert(props) {
    const capatilize = (word)=>{
        const lower = word.toLowerCase();
         return lower.charAt(0).toUpperCase + lower.slice(1);
    }
    return (
          props.alert &&  <div className={`alert  alert-${props.alert.type} alert-dismissible fade show` }role="alert" >
                <strong>{props.alert.type}</strong> : {props.alert.msg}
               
            </div>
    
    );
}

export default Alert;

//   props.alert && ==> what does it mean is this that when ever you use it in js then firstly it will evaluate the 
// first term like here it will evaluate the props.alert if it goes false or null it wont run next
//  beacuse all JSX will  be converted to JS calls