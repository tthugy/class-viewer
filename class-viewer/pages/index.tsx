import type { NextPage } from 'next'
import Header from './header'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import toast, { Toaster } from 'react-hot-toast'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {


  const router = useRouter();
  
  const loginCode = '971216';
  const loginId = 'wonseok';

  const [comcode, setComcode] = useState("");
  const [userName, setUserName] = useState("");

  const [codeStatus, setCodeStatus] = useState(false);
  const [nameStatus, setNameStatus] = useState(false);
  
  const comeCodeChange = (e: { target: { value: any } }) => {
    setCodeStatus(false);
    const data = e.target.value;
    setComcode(data);
  }

  const userNameChange = (e: { target: { value: any } }) => {
    setNameStatus(false);
    const data = e.target.value;
    setUserName(data);
  }

  const loginForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if((comcode === loginCode && userName === loginId)){
      router.replace("/home");
    } else {

      if(comcode === ""){
        setCodeStatus(true);
      }
  
      if(userName === ""){
        setNameStatus(true);
      }
    }
  }

  return (
    <div className="inApp">
      <div className={styles.layout}>
        <p className={styles.firstMent}>
          <span>Login</span>
        </p>
        <form onSubmit={loginForm}>
          <div className={styles.loginBox}>
              <input type="text" className={`${codeStatus && styles.shaker} ${codeStatus && styles.wrong}`} name="companyCode" maxLength={6} onChange={comeCodeChange} placeholder="아이디" />
              <span className={`${styles.loginError} ${codeStatus && styles.block}`}>아이디를 입력해 주세요.</span>
              <input type="text" className={`${nameStatus && styles.shaker} ${nameStatus && styles.wrong}`} maxLength={15} name="userPassword" onChange={userNameChange} placeholder="비밀번호" />
              <span className={`${styles.loginError} ${nameStatus && styles.block}`}>비밀번호를 입력해 주세요.</span>
          </div>
          <span className={styles.subMent}>
            <i className="bi bi-shield-exclamation"></i>
            <span>로그인하세요.</span>
          </span>
          <button type="submit" className={styles.loginBtn}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home
