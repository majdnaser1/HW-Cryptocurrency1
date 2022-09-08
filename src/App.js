import { useEffect, useState } from "react";
import React from 'react'
import Select from 'react'
import "./App.css";

function App() {
  const [cryptoCurrencyId, setryptoCurrencyId] = useState([]);
  const [cryptoCurrencySearch, setCryptoCurrencySearch] = useState(false);
  const [searchV, setSearchV] = useState({});
  const [cryptoCurrencyList, setCryptoCurrencyList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("https://api.coinstats.app/public/v1/coins");
      const data = await request.json();
      setCryptoCurrencyList(data.coins.slice(0, 10));
      setryptoCurrencyId(
        data.coins.slice(0, 10).map((e) => {
          return {
            value: e.id,
            label: e.name,
          };
        })
      );
    };

    fetchData();
  }, []);

  const search = async (o) => {
    const request = await fetch(
      `https://api.coinstats.app/public/v1/coins/${o.value}`
    );
    const data = await request.json();
    setSearchV(data.coin);
    setCryptoCurrencySearch(true);
  };
  return (
    <div className="container mt-5 w-50">
      <h1 className="text-center text-light">Cryptocurrency</h1>
      <div className="input-group mt-3 w-100 mx-auto">
        <Select
          onChange={searchV}
          className="w-100"
          options={cryptoCurrencyId}
        />
      </div>
      {cryptoCurrencySearch ? (
      <div className="card w-100 mt-5 ml-auto">
      <img
      width="30px"
      height="400px"
      src={searchV.icon}
      className="card-img-top"
      alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{searchV.name}</h5>
      <p className="card-text">
       price:{searchV.price}
      rank:{searchV.rank}
      priceBtc:{searchV.priceBtc}
      volume:{searchV.volume}
      marketCap:{searchV.marketCap}</p>
      </div>
      </div>
      ) : (
        <ol className="list-group list-group-numbered mt-5">
          {cryptoCurrencyList.map((e, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{e.name}</div>
                price:{e.price}
              </div>
              <span>
                <img src={e.icon} className="card-img-top" alt="..." />
              </span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default App;
