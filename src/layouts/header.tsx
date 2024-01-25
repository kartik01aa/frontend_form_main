import React from 'react'
import styles from '../style/header.module.css'
import { useAppSelector } from '../store/store'

const Header = () => {
     const user = useAppSelector(state => state.user)
  return (<>
    <div className={styles.header} >
          Welcome, {user.name}
    </div>
    <button className={styles.btn}> Logout</button>
  </>)
}

export default Header