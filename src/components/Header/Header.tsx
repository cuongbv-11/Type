import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className={`container ${styles.container}`}>
        <NavLink className={`navbar-brand ${styles.navbarBrand}`} to='/'>
          Home
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.navbarCollapse}`} id='navbarNav'>
          <ul className={`navbar-nav ml-auto ${styles.navbarNav}`}>
            <li className='nav-item'>
              <NavLink className={`nav-link ${styles.navLink}`} to='/login'>
                Login
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={`nav-link ${styles.navLink}`} to='/register'>
                Register
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={`nav-link ${styles.navLink}`} to='/admin'>
                Admin Page
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={`nav-link ${styles.navLink}`} to='/logout'>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
