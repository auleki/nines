import {
  NavbarStyle,
  NavlinkStyle,
  Paragraph
} from '../components/styledComponents'
import { icons } from '../components/constants'

const Navbar = () => {
  return (
    <NavbarStyle>
      <div className='logo'>
        <h2>
          SKY<span>WAY</span>
        </h2>
      </div>
      <div className='navlinks'>
        <NavlinkStyle>Home</NavlinkStyle>
        <NavlinkStyle>Storefront</NavlinkStyle>
        <NavlinkStyle>Login/Register</NavlinkStyle>
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
