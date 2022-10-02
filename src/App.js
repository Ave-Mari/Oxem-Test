import {useState, useEffect} from "react";
import { hot } from 'react-hot-loader/root';

import React from 'react'

export default function App() {
  const [price, setPrice] = useState(1000000);
  const [initFee, setinitFee] = useState(null);
//  const [price, setPrice] = useState(1000000);


  useEffect(() => {
    setinitFee((price) => {
      return price/350;
    })
  }, [price])

  // const getInitFee = (price) => {
  //   return price/350;
  // }
  

  return (
    <>
    <p>Стоимость автомобиля</p>
    <input type="text" placeholder={price} />
    <input type="range" value={price} min="1000000" max="6000000" step="100000" onChange={(e) => setPrice(e.target.value)}/>

    <p>Первоначальный взнос</p>
    <input type="text" placeholder={initFee} />
    <input type="range" value={initFee} min="1000000" max="6000000" step="100000" onChange={(e) => setinitFee(e.target.value)}/>
{/* 
    <p>Срок лизинга</p>
    <input type="text" placeholder={price} />
    <input type="range" value={price} min="1000000" max="6000000" step="100000" onChange={(e) => setPrice(e.target.value)}/> */}
   
    </>
  )
}


