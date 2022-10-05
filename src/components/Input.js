import React from "react";

export default function Price( { placeholder, inputTextChange, inputRangeChange, value, min, max, inputTitle, inputUnit } ) {
  return (
    <>
 <p>{inputTitle}</p>
   <div className="input-block"> 
   <input type="text" placeholder={placeholder} onChange={inputTextChange}/>
    <input type="range" className="input-range" value={value} min={min} max={max} onChange={inputRangeChange}/>
    <p className="input-percent">{inputUnit}</p>
   </div>
    
    </>
  )
}
