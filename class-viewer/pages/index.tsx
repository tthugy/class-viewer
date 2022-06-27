import type { NextPage } from 'next'
import Header from './header'
import Image from 'next/image'
import styles from '../styles/index.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.infoBox}>
        <p>오늘의 근무</p>
        <div className={styles.todays}>
          <span className={styles.workday}>06.27</span>
          <span>
            08:54~18:17
            <div className={styles.nofiBox}>퇴근완료</div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
