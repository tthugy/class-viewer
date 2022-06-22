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
            <li>Menu2</li>
            <li>Menu3</li>
        </ul>
    )
  }
  
  export default Nav