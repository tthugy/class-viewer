import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import useRef from 'next'
import useEffect from 'next'
import cn from 'classnames';

const handleClick = () => {
    const navBox = document.querySelector("#navWrap");
    navBox.classList.add(styles.open);
}

const handleClose = () => {
    const navBox = document.querySelector("#navWrap");
    navBox.classList.remove(styles.open);
}

const Header: NextPage = () => {
    return (
        <div>
            <header className={styles.header}>
                <i onClick={handleClick} className="bi bi-list"></i>
                <span>MyApp</span>
            </header>
            <div id="navWrap" className={styles.navigator_wrap}>
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