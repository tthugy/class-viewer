import type { NextPage } from 'next'
import Header from './header'
import Nav from './nav'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Header/>
      <div className={styles.infoBox}>
        
      </div>
      <Nav/>
    </div>
  )
}

export default Home
