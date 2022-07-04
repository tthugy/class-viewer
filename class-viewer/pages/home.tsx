import type { NextPage } from 'next'
import Header from './header'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import toast, { Toaster } from 'react-hot-toast'
import React, { useState, useEffect } from 'react'

const Home: NextPage = () => {

  const [state, setState] = useState(false);

  const notify = () => {
    if(state === false){
      toast.success('출근 신청이 완료되었습니다.');
      setState(true);
    } else {
      toast.error('이미 출근 신청을 했습니다.');
    }
  }

  return (
    <div>
      <div className={styles.infoBox}>
        <p>오늘의 근무</p>
        <div className={styles.todays}>
          <span className={styles.workday}>07.05</span>
          <span>
            일정없음
            <div className={styles.nofiBox}>무일정</div>
          </span>
        </div>
        <a onClick={notify} className={styles.actionBtn}>출근하기</a>
        <Toaster />
        {/* <div className={styles.workTotal}>
          <dl className={styles.workList}>
            <dt>출근</dt>
            <dd>09:00</dd>
            <dt>퇴근</dt>
            <dd>18:00</dd>
            <dt>총 근무시간</dt>
            <dd>9시간</dd>
          </dl>
        </div> */}
      </div>
    </div>
  )
}

export default Home
