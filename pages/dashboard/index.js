import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from "../../styles/bootstrap.min.css"



const Dashboard = () =>{

    return(
        <>

    <div class="col-12 col-lg-5">
      <div class="cryptos-prices-table">
    <div class="single-price-table d-flex align-items-center justify-content-between">

    <div class="p-content d-flex align-items-center">
    <span>01</span>
    <Image src="/img/bg-img/bitcoin.png" alt="" width="64" height="64" />
    <p>Bitcoin <span>BTC</span></p>
    </div>

<div class="price increase">
    <p>$12 456.78</p>
 </div>
 </div>
</div>
</div>

        </>
    )
}

export default Dashboard;

