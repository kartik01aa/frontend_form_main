import React from 'react'
import styles from '../style/header.module.css'
import { useAppDispatch, useAppSelector } from '../store/store'
import { useLazyLogoutUserQuery } from '../services/api'
import { logout } from '../store/reducers/login'

const Header = () => {
     const user = useAppSelector(state => state.user)
     const storeDispatch = useAppDispatch()
     const [logoutUser] = useLazyLogoutUserQuery()
     const handleLogout = async()=>{
          const returnData = await logoutUser()
          console.log(returnData);
          localStorage.removeItem("userLogged")
          storeDispatch(logout())    
     }

  return (<>
    <div className={styles.header} >
          Welcome, {user.name}
    </div>
    <button onClick={handleLogout} className={styles.btn}> Logout</button>
  </>)
}

export default Header