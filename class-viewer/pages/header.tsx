import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/header.module.css'

const Header: NextPage = () => {
    return (
        <header className={styles.header}>
            <i className="bi bi-list"></i>
            <span>MyApp</span>
        </header>
    )
  }
  
  export default Header