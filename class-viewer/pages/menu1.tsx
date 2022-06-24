import type { NextPage } from 'next'
import Header from './header'
import Nav from './nav'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/menu1.module.css'

const Menu1: NextPage = () => {
  return (
    <div>
      <Header/>
      <span className={styles.center}>요청</span>
      <Nav/>
    </div>
  )
}

export default Menu1
