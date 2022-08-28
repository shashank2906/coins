import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Coin from './coin/index';
import axios from 'axios';
import styles from './index.module.css';

const Coins = () =>
{
  const [ coins, setcoins ] = useState([]);
  const [ search, usesearch ] = useState('');

  useEffect(() =>
  {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) =>
      {
        setcoins(res.data);
      })
      .catch((err) =>
      {
        console.log(err);
      });
  }, []);

  const handlechange = (e) =>
  {
    usesearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div className={styles.headContainer}>
        <div className={styles.header}>
          <h1 className={styles.brand}>
            <span className={styles.span}>C</span>

            <lord-icon
              src={`https://cdn.lordicon.com/vaeagfzc.json`}
              trigger='loop'
              style={{ width: '50px', height: '50px', marginBottom: "9px" }}
            ></lord-icon>
            <span className={styles.span}>INS</span>

          </h1>
          <form>
            <input
              className={styles.inputField}
              type='text'
              placeholder='Search a Coin'
              onChange={handlechange}
            />
          </form>
        </div>
      </div>

      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {filteredCoins.map((coin) =>
        {
          return (
            <div className='p-2'>
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                volume={coin.total_volume}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            </div>
          );
        })}
      </div>

      <script src='https://cdn.lordicon.com/lusqsztk.js'></script>
    </>
  );
};

export default Coins;
