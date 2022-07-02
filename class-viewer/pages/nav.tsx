import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/nav.module.css'

const Nav: NextPage = () => {
    return (
        <ul className={styles.nav}>
            <Link href="/">
                <li>
                    <i className="bi bi-house-door-fill"></i>
                </li>
            </Link>
            <Link href="/menu1">
                <li>
                    <i className="bi bi-chat"></i>
                </li>
            </Link>
            <Link href="/menu2">
                <li>
                    <i className="bi bi-calendar-check"></i>
                </li>
            </Link>
            <Link href="/menu3">
                <li>
                    <i className="bi bi-clock"></i>
                </li>
            </Link>
        </ul>
    )
  }
  
  export default Nav