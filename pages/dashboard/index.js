import React from 'react';
import Head from 'next/head';
import Coins from '../../components/coins/index';
import News from '../../components/news/index';


const Dashboard = () => {
  
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Coins />
      <News />

    </>
  );
};

export default Dashboard;
