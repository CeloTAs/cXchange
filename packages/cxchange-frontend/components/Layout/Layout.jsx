import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'


const Layout = ({children, title, content}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={`${content}`} />
            <link rel="icon" href="/fav.png" />
        </Head>
        <Header/>

            {children}

    </>
  )
}

export default Layout