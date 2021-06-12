import { NavbarStyle, NavlinkStyle } from '../components/styledComponents'

const Navbar = () => {
  return (
    <NavbarStyle>
      <div className='logo'>
        <h2>SKY WAY</h2>
      </div>
      <div className='navlinks'>
        <NavlinkStyle>Home</NavlinkStyle>
        <NavlinkStyle>Storefront</NavlinkStyle>
        <NavlinkStyle>Login/Register</NavlinkStyle>
      </div>
    </NavbarStyle>
  )
}

export default Navbar
