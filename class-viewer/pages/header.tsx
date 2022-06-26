import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import useEffect from 'next'
import classNames from 'classnames';

let cn = classNames.bind(styles);

let toggle = 0;

const handleClick = () => {
    toggle = 1;
}

const handleClose = () => {
    toggle = 0;
}

const Header: NextPage = () => {
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