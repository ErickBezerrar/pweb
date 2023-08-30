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
            background: rgb(238,174,202);
            background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
          } 
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
