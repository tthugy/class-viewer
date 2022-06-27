import type { NextPage } from 'next'
import Header from './header'
import Image from 'next/image'
import styles from '../styles/index.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.infoBox}>
        <p>출석체크</p>
        <div className={styles.todays}>
          <span className={styles.workday}>06.27</span>
          <span>08:54~18:17</span>
        </div>
      </div>
    </div>
  )
}

export default Home
