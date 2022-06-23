import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/nav.module.css'

const Nav: NextPage = () => {
    return (
        <ul className={styles.nav}>
            <Link href="/">
                <li>Home</li>
            </Link>
            <Link href="/menu1">
                <li>Menu1</li>
            </Link>
            <Link href="/menu2">
                <li>Menu2</li>
            </Link>
            <Link href="/menu3">
                <li>Menu3</li>
            </Link>
        </ul>
    )
  }
  
  export default Nav