import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

export const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to='/' className={style.navLink}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/login' className={style.navLink}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to='/register' className={style.navLink}>
          Register
        </NavLink>
      </li>
    </ul>
  )
}