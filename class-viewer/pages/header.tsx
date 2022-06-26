import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import cn from 'classnames';

const handleClick = () => {
    const navBox = document.querySelector("#navWrap");
    const style = cn.bind(styles);
    navBox.classList.add('open');
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

                </div>
            </div>
        </div>
    )
  }
  
  export default Header