import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.navLinks}>
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
          <li>
            <NavLink to='/admin' className={style.navLink}>
              Admin Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
