import React from "react";

export default function Input( { placeholder, inputTextChange, inputRangeChange, value, min, max, inputTitle, inputUnit } ) {
  return (
    <>
   <div className="block"> 
   <h3 className="gilroy-font">{inputTitle}</h3>
   <div className="input-wrapper">
   <input className="text-input" type="text" placeholder={placeholder} onChange={inputTextChange}/>
    <input type="range" className="input-range" value={value} min={min} max={max} onChange={inputRangeChange}/>
    <p className="input-percent">{inputUnit}</p>
    </div>
   </div>
    
    </>
  )
}
