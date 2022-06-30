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
          <span className={styles.workday}>07.01</span>
          <span>
            08:54~18:17
            <div className={styles.nofiBox}>퇴근완료</div>
          </span>
        </div>
        <a className={styles.actionBtn}>출근하기</a>
        <div className={styles.workTotal}>
          <dl className={styles.workList}>
            <dt>출근</dt>
            <dd>09:00</dd>
            <dt>퇴근</dt>
            <dd>18:00</dd>
            <dt>총 근무시간</dt>
            <dd>9시간</dd>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Home
