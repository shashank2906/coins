import React from "react";
import Head from "next/head";
import Section from "../../components/coins/index"
import News from "../../components/news/index"
import Header from "../../components/header";

const Dashboard = () =>{

    return(
        <>
        <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Header />
        <Section />
        {/* <News /> */}

        
        
        </>
    )




}


export default Dashboard;