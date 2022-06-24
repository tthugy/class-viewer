import type { NextPage } from 'next'
import Header from './header'
import Nav from './nav'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/menu3.module.css'

const Menu2: NextPage = () => {
  return (
    <div>
      <Header/>
      <span className={styles.center}>휴가</span>
      <Nav/>
    </div>
  )
}

export default Menu2
