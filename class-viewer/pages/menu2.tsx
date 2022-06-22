import type { NextPage } from 'next'
import Nav from './nav'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/menu1.module.css'

const Menu2: NextPage = () => {
  return (
    <div>
      <span className={styles.center}>Next App @Menu2</span>
      <Nav/>
    </div>
  )
}

export default Menu2
