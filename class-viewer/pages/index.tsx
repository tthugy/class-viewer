import type { NextPage } from 'next'
import Nav from './nav'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <span className={styles.center}>Next App</span>
      <Nav/>
    </div>
  )
}

export default Home
