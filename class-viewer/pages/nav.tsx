import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/nav.module.css'

const Nav: NextPage = () => {
    return (
        <ul className={styles.nav}>
            <Link href="/">
                <li>홈</li>
            </Link>
            <Link href="/menu1">
                <li>요청</li>
            </Link>
            <Link href="/menu2">
                <li>근무일정</li>
            </Link>
            <Link href="/menu3">
                <li>출퇴근기록</li>
            </Link>
            <Link href="/menu4">
                <li>휴가</li>
            </Link>
        </ul>
    )
  }
  
  export default Nav