import React, {useState, useEffect} from "react";
import { hot } from 'react-hot-loader/root';
import Input from "./components/Input";
import './main.css'


export default function App() {

  const [price, setPrice] = useState(3300000); 
  const [initial, setInitial] = useState(420000);  
  const [percent, setPercent] = useState(Math.round((initial / price) * 100));
  const [months, setMonths] = useState(60);

  const [monthPay, setMonthPay] = useState(1);
  
  function numberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

useEffect(() => {
  setInitial(Math.round((percent / 100) * price));  
}, [price, initial, percent]);


useEffect(() => {
  setMonthPay(Math.round((price - initial) * ((0.035 * Math.pow((1 + 0.035), months)) / (Math.pow((1 + 0.035), months) - 1))));
}, [initial, percent, months]);


  return (
    <>
    <section className="main-section">
      <h1 className="section-headline">Рассчитайте стоимость автомобиля в лизинг</h1>
      <div className="blocks-wrapper">
      <Input
    placeholder={numberWithSpaces(price)}
    inputTextChange={e => setPrice(e.target.value)}
    inputRangeChange={e => setPrice(e.target.value)}
    value={price}
    min={1000000}
    max={6000000}
    inputTitle={'Стоимость автомобиля'}
    inputUnit={'₽'}
     />

<Input
    placeholder={numberWithSpaces(initial)}
    inputTextChange={e => setInitial(e.target.value)}
    inputRangeChange={e => setPercent(e.target.value)}
    value={percent}
    min={10}
    max={60}
    inputTitle={'Первоначальный взнос'}
    inputUnit={percent + '%'}
     />

<Input
    placeholder={months}
    inputRangeChange={(e) => setMonths(e.target.value)}
    inputTextChange={(e) => setMonths(e.target.value)}
    value={months}
    min={1}
    max={60}
    inputTitle={'Срок лизинга'}
    inputUnit={'мес.'}
     />
  
    <div className="block">
      <p className="gilroy-font amount">Сумма договора лизинга</p>
      <p className="amount-value">{numberWithSpaces(initial + months * monthPay)} ₽</p>
    </div>
    <div className="block">
      <p className="gilroy-font amount">Ежемесячный платёж от</p>
      <p className="amount-value">{numberWithSpaces(monthPay)} ₽</p>
    </div>
    <div className="block">
     <button type="submit" className="btn-submit">Оставить заявку</button>
    </div>


      </div>
   
    </section>
    </>
  )
}


