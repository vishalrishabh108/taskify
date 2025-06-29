// import React from 'react'
import React,{useState} from 'react'



export default function Textfr(props) {
    const handleClearClick = ()=>{
        console.log("radhe radhe")
        let tet = '';
        setText(tet)
    }
    const handleUpClick = ()=>{
        // console.log("radhe radhe" + text)
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handleLoClick = ()=>{
        // console.log("radhe radhe " + text);
        let ne = text.toLocaleLowerCase();
        setText(ne)
    }
    const haldeonchange = (event)=>{
        console.log("")
        setText(event.target.value)
    }
    const [text, setText]= useState('');
    // text = "radhe"
    // setText("hello")
    return (
   <>

         <div className='container'>
            <h1>{props.heading} </h1>

      <div className="form-floating">
       
  <textarea className="form-control" value={text} onChange={haldeonchange} id="myBox" rows="8"></textarea>
  <button className='btn btn-primary mx-4 my-3' onClick={handleUpClick}>Convert to Uppercase</button>
  <button className='btn btn-primary' onClick={handleLoClick}>Convert to Lowercase</button>
  <button className='btn btn-primary mx-4' onClick={handleClearClick}>Space remmove</button>

  
</div>
    </div>
    <div className="container my-2">
        <h1>Your text summary</h1>
        <p> {text.split(" ").length} and {text.length}  characters</p>
    </div>
   </>
    
  )
}
