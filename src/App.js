import React, {useState, useEffect} from "react";
import { hot } from 'react-hot-loader/root';
// import Price from "./components/Price";
// import Fee from "./components/Fee";
import './styles.css'



export default function App() {

  const [price, setPrice] = useState(3300000); 
  const [initial, setInitial] = useState(420000);  
  const [percent, setPercent] = useState(Math.round((initial / price) * 100));
  const [months, setMonths] = useState(6);

  const [monthPay, setMonthPay] = useState(1);
  
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

useEffect(() => {
  setInitial(Math.round((percent / 100) * price));  
}, [price, initial, percent]);


useEffect(() => {
  setMonthPay(Math.round((price - initial) * ((0.035 * Math.pow((1 + 0.035), months)) / (Math.pow((1 + 0.035), months) - 1))));
}, [initial, percent, months])

  return (
    <>
   <p>Стоимость автомобиля</p>
   <div className="input-block"> 
   <input type="text" placeholder={price} onChange={e => setPrice(e.target.value)}/>
    <input type="range" className="input-range" value={price} min="1000000" max="6000000" onChange={(e) => setPrice(e.target.value)}/>
    <p className="input-percent">₽</p>
   </div>
    
    <p>Первоначальный взнос</p>
    <div className="input-block"> 
    <input type="text"  placeholder={initial} value={initial} onChange={e => setInitial(e.target.value)}/>    
    <input className="input-range" type="range" value={percent} min="10" max="60" onChange={e => setPercent(e.target.value)}/>
    <p className="input-percent">{percent}%</p>
    </div>
    <div className="input-block">
    <p>Срок лизинга</p>
    <input type="text" placeholder={months} />
    <input type="range" className="input-range" value={months} min="1" max="6" onChange={(e) => setMonths(e.target.value)}/> 
    <p className="input-percent">мес.</p>
    </div>

    <div>
      <p>Сумма договора лизинга {initial + months * monthPay} </p>
    </div>
    <div>
      <p>Ежемесячный платёж от {monthPay} ₽</p>
    </div>
   
    </>
  )
}


