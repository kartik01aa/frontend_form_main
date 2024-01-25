import React from 'react'
import styles from '../style/home.module.css'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/store'
import Header from '../layouts/header'
import Footer from '../layouts/footer'

const Home = () => {
     const user = useAppSelector(state => state.user)
     return (<>{user.name && <Header/>}
          <h1 className={styles.heading}>This is home page</h1>
          <div className={styles.container} >
               <Link to='/register' ><button className={styles.btn} >Register</button></Link>
               <Link to='/login' ><button className={styles.btn} >Login</button></Link>
          </div>
          {user.name && <Footer/>}
     </>)
}

export default Home