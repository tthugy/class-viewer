import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import useState from 'react'
import React from 'react';

const Header: NextPage = () => {
    
    const [nav, setNav] = React.useState<boolean>(false);

    return (
        <div>
            <header className={styles.header}>
                <i onClick={() => setNav(true)} className="bi bi-list"></i>
                <span className={styles.logo}>MyApp</span>
            </header>
            <div className={`${styles.navigator_wrap} ${nav ? styles.open : ''}`}>
                <div className={styles.navigation}>
                    <span onClick={() => setNav(false)} className={styles.btnClose}>
                        <i className="bi bi-x"></i>
                    </span>
                </div>
            </div>
        </div>
    )
  }
  
  export default Header