import type { NextPage } from 'next'
import Nav from './nav'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      Next App
      <Nav/>
    </div>
  )
}

export default Home
