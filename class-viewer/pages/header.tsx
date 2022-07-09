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
                <span className={styles.logo}>🌼</span>
            </header>
            <div className={`${styles.navigator_wrap} ${nav ? styles.open : ''}`}>
                <div className={styles.navigation}>
                    <span onClick={() => setNav(false)} className={styles.btnClose}>
                        <i className="bi bi-x"></i>
                    </span>
                    <div className={styles.nList}>
                        <i className="bi bi-chat"></i>
                        채팅
                    </div>
                    <div className={styles.nList}>
                        <i className="bi bi-calendar-check"></i>
                        일정관리
                    </div>
                    <div className={styles.nList}>
                        <i className="bi bi-clock"></i>
                        출퇴근기록
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Header