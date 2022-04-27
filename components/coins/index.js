import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Coin from './coin';
import styled from "styled-components";

const Dashboard = () => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>



      

          <Container2>

          

          

      

      <div className="d-flex flex-row flex-wrap justify-content-center">

          <div className="p-2">
          <Coin />

          </div>
          <div className="p-2">
          <Coin />

          </div>
          <div className="p-2">
          <Coin />

          </div>
          <div className="p-2">
          <Coin />

          </div>
     



      </div>

      </Container2>

      

     
    </>
  );
};

export default Dashboard;



const Container2 = styled.div`

  margin-top: 80px;
  

`