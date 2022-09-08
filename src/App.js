
import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Img from'./Img.js';
import  Rowcol  from './Rowcol';

const App = ()=>  {

const [cryptoImg , setCryptoImg]= useState('');
const [crypto , setCrypto]=useState('');
const [cryptoList , setCryptoList]=([]);
const [cryptoPrice , setCryptoPrice]=useState(0);
const [cryptoDetails , setCryptoDetails]=useState('');

useEffect(() => {
const fetchCryptoData= async () => {
const requst= await fetch('https://api.coincap.io/v2/assets/')
const data = await requst.json();
setCryptoImg(data.data.symbol);
setCryptoPrice(data.data.maxSupply);
setCryptoList(data.data.name);
console.log('data',data)




};
fetchCryptoData();

},[]);

// useEffect(() => {
//   const fetchCryptoSymbol= async () => {
//   const requst= await fetch(`https://api.coincap.io/v2/https://cryptoflash-icons-api.herokuapp.com/svg/color/${cryptoImg}`)
//   const dataSymbol = await requst.json();

  
//   };
//   fetchCryptoSymbol();
  
//   },[]);



  return (
    <>
    <div className='container text-center' >
      <h1>Cryptocurrency</h1>
      <Form cryptoList={cryptoList} />
      <Rowcol />

      
      
    </div>
    </>
  );
}

export default App;

