import React from 'react';
import Head from 'next/head';
import '../styles/index.module.css'; 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {}
        <style>{`
          body {
             background: rgb(2,0,36);
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(229,121,167,1) 35%, rgba(0,212,255,1) 100%);
          } 
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
