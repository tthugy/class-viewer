import type { NextPage } from 'next'
import Header from './header'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import toast, { Toaster } from 'react-hot-toast'
import React, { useEffect } from 'react'

const Home: NextPage = () => {

  const notify = () => toast.success('출근 신청이 완료되었습니다.');

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
        <a onClick={notify} className={styles.actionBtn}>출근하기</a>
        <Toaster />
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
