import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import useState from 'next'
import classNames from 'classnames';
import React from 'react';

const Header: NextPage = () => {
    let cn = classNames.bind(styles);
    const [nav, setNav] = React.useState(false);
    const handleClick = () => setNav(true);
    const handleClose = () => setNav(false);
    return (
        <div>
            <header className={styles.header}>
                <i onClick={handleClick} className="bi bi-list"></i>
                <span>MyApp</span>
            </header>
            <div className={cn('styles.navigator_wrap')}>
                <div className={styles.navigation}>
                    <span onClick={handleClose} className={styles.btnClose}>
                        <i className="bi bi-x"></i>
                    </span>
                </div>
            </div>
        </div>
    )
  }
  
  export default Header