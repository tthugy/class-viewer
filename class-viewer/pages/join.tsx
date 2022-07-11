import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/menu1.module.css'
import Link from 'next/link'

const Menu1: NextPage = () => {
  return (
    <div>
      <span className={styles.center}>회원가입</span>
      <Link href="/">
        <span className={styles.main}>메인화면으로</span>
      </Link>
    </div>
  )
}

export default Menu1
