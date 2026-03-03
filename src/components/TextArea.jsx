import { useState } from "react";

const TextArea = (props) => {

   const [text, setText] = useState('');

   let handleUpClick = ()=>{
     let newUpText = text.toUpperCase()
         setText(newUpText)
        props.showAlert('Text to uppercase', 'success')
   } 
   let handleOnChang = (event)=>{
        setText(event.target.value)
   }
   let handleLowClick = (event)=>{
     let newLowText = text.toLowerCase()
      setText(newLowText)
      props.showAlert('Text to lowercase', 'success')
   }
   let cleartext = ()=>{
    let clearText = ''
     setText(clearText)
     props.showAlert('Text to clear', 'success')
  }
    return (
        <div style={{ backgroundColor: props.bodyMode, color : 'white' }}>
            <div className="container"> 
                <div className="textarea-wrapper">
                    <h1 style={{textAlign:'center'}}>{props.heading}</h1>
                    <textarea value={text} className="text-area" onChange={handleOnChang} style={{width:'100%' , height:'250px'}} id="Textarea"></textarea>
                    <button className="btn my-2 btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn my-2 ms-2 btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button className="btn my-2 ms-2 btn-primary" onClick={cleartext}>Clear Text</button>
                </div>
            </div>

            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-12" style={{textAlign:'center'}}>
                         <h1> Your Text Summery</h1>
                         <span>Number of word is {text.split(' ').filter((value)=>{return value.length !=0}).length} and number of Chrecter is {text.length === ' ' ? null : text.length}
                         </span>
                         <p>{text.length === 0 ? 'Text box preview' : `${text}`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextArea;