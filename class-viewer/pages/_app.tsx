import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { AppProps } from 'next/app'
import Header from './header'
import Nav from './nav'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [path, setPath] = useState(false);

  useEffect(() => {
    if(router.pathname === "/"){
      setPath(true);
    } 
  }, []);

  return (
    <div>
      {path === false && <Header/>}
      <Component {...pageProps} />
      {path === false && <Nav/>}
    </div>
  )
}

export default MyApp
