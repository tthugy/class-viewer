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
      <span className={styles.center}>홈</span>
      <Nav/>
    </div>
  )
}

export default Home
