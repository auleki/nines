import { useState } from 'react'
import {
  NavbarStyle,
  NavlinkStyle,
  SmallButton,
  CartStyle,
  CartItemStyle
} from '../components/styledComponents'
// import { icons } from '../components/constants'
import { Link } from 'react-router-dom'

function CartItem () {
  return (
    <CartItemStyle>
      <p className='name'>Fela's Tears</p>
      <p className='price'>N4,000/g</p>
      <div className='itemQuantity'>
        <SmallButton>-</SmallButton>
        <p className='quantity'>5</p>
        <SmallButton>+</SmallButton>
      </div>
      <div className='deleteItem'>
        <i class='bx bx-trash-alt deleteIcon'></i>
      </div>
    </CartItemStyle>
  )
}

function Cart () {
  return (
    <CartStyle>
      <h2 className='title'>Cart</h2>

      <div className='cartContent'>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </CartStyle>
  )
}

const Navbar = () => {
  const [showCart, setShowCart] = useState(true)

  const toggleCart = () => setShowCart(!showCart)

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
        {/* <Link to='/profile'>
          <NavlinkStyle>Profile Page</NavlinkStyle>
        </Link> */}
      </div>
      <div className='userActions'>
        <i onClick={toggleCart} class='uil uil-shopping-cart'></i>
        <i class='uil uil-search'></i>
        <i class='uil uil-user'></i>
      </div>
      {showCart && <Cart />}
    </NavbarStyle>
  )
}

export default Navbar
