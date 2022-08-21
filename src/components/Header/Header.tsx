import React from 'react'
import {Link} from 'react-router-dom'
import {IAuth} from '../../models'
import s from './Header.module.css'

interface HeaderProps {
  auth: IAuth
}

const Header = ({auth}: HeaderProps) => {
  return (
    <header className={s.header}>
      <img
        src='https://www.rexburg.org/sites/default/files/styles/gallery500/public/imageattachments/info-tech/page/1061/it_logo_2018.jpg?itok=V2IxZjn8'
        alt='ava'
      ></img>
      <div className={s.loginBlock}>
        {auth.isAuth ? <p>{auth.login}</p> : <Link to='/login'>Login</Link>}
      </div>
    </header>
  )
}

export default Header
