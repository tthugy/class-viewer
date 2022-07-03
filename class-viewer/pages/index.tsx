import type { NextPage } from 'next'
import Header from './header'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import toast, { Toaster } from 'react-hot-toast'
import React, { useState, useEffect } from 'react'

const Home: NextPage = () => {

  const formSubmit = () => {

  }

  return (
    <div className={styles.loginLayout}>
      index
      <form onClick={formSubmit}>
        <input type="text" placeholder="아이디"></input>
        <input type="text"  placeholder="비밀번호"></input>
        <button type="submit">로그인</button>
      </form>
    </div>
  )
}

export default Home
