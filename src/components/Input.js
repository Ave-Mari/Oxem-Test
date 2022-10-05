import React from "react";

export default function Input( { placeholder, inputTextChange, inputRangeChange, value, min, max, inputTitle, inputUnit } ) {
  return (
    <>
 <h3>{inputTitle}</h3>
   <div className="input-block"> 
   <input type="text" placeholder={placeholder} onChange={inputTextChange}/>
    <input type="range" className="input-range" value={value} min={min} max={max} onChange={inputRangeChange}/>
    <p className="input-percent">{inputUnit}</p>
   </div>
    
    </>
  )
}
