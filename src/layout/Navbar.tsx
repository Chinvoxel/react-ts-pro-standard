import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  const location = useLocation()
  const hideNavbar = location.pathname === '/login'

  if (hideNavbar) return null // 登陆页隐藏navbar

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end className="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about/" className="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/debug/" className="active">
            debug
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
