import {
  NavbarStyle,
  NavlinkStyle,
  Paragraph
} from '../components/styledComponents'
import { icons } from '../components/constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <NavbarStyle>
      <div className='logo'>
        <h2>
          SKY<span>WAY</span>
          <span>.</span>
        </h2>
      </div>
      <div className='navlinks'>
        <Link to='/'>
          <NavlinkStyle>Home</NavlinkStyle>
        </Link>
        <Link to='/store'>
          <NavlinkStyle>Storefront</NavlinkStyle>
        </Link>
        <Link to='/login'>
          <NavlinkStyle>Login/Register</NavlinkStyle>
        </Link>
      </div>
      <div className='userActions'>
        <p>CART</p>
        <p>SEARCH</p>
        <p>USER</p>
      </div>
    </NavbarStyle>
  )
}

export default Navbar
