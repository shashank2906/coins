import React from 'react';
import Styles from './coin.module.css';
import Head from 'next/head';
const Coin = ({name, image, symbol,price,marketcap,volume, priceChange}) => {


  return (
    <>

      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      </Head>

    <div className={Styles.cardContainer}>
      <div className={Styles.card} style={{ width: '18rem' }}>

        
        <img className={Styles.img} src={image} style ={{width : "80px", alignSelf: "center" , margin: "10px"}} alt='myimg' />

        <div className={Styles.imageflex}>
        <h5 className='cardS'>{name}</h5>
        <h6 className='cardS'>({symbol})</h6>
        </div>
        <h5 className='card-title'>${price}</h5>


        <div className='cardbdy'>   
          <p className={Styles.blue}> <span>marketcap :  $</span> {marketcap.toLocaleString()}</p>
          <p className={Styles.blue}><span>Volume(24h) :  $</span> {volume.toLocaleString()}</p>
          
                   
        </div>

       
        
        {priceChange < 0 ? (
        <div className={Styles.priceContainerDOWN}>
        <i class="fa-solid fa-angle-down"></i>
          <p className={Styles.priceChange}>{priceChange.toFixed(2)}%</p>
        </div>
      ) : (
        <div className={Styles.priceContainerUP}>
        <i class="fa-solid fa-angle-up"></i>
          <p className={Styles.priceChange}>{priceChange.toFixed(2)}%</p>
        </div>
      )}
        
      </div>
      
    </div>


    {<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js" integrity="sha512-6PM0qYu5KExuNcKt5bURAoT6KCThUmHRewN3zUFNaoI6Di7XJPTMoT6K0nsagZKk2OB4L7E3q1uQKHNHd4stIQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>}
    </>

 
  );
};

export default Coin;
