import { NavLink } from 'react-router-dom'
import { DashNav } from '../components/styledComponents'
import { icons } from '../components/constants'

const UserNavbar = () => {
  return (
    <DashNav>
      <NavLink to='/store' className='active sideLink'>
        <i class='bx bx-store-alt'></i>
        <p>Storefront</p>
        {/* <p>{icons.search}</p> */}
      </NavLink>
      {/* <NavLink to='/stats' className='active'>
        <p>Stats</p>
        <p>{icons.search}</p>
      </NavLink> */}
      <NavLink to='/orders'>
        <i class='bx bxs-collection'></i>
        <p>Orders</p>
      </NavLink>

      <NavLink to='/favorites'>
        <i class='bx bxs-heart-circle'></i>
        <p>Favorites</p>
      </NavLink>
      <NavLink to='/settings'>
        <i class='bx bx-slider-alt'></i>
        <p>Settings</p>
      </NavLink>
    </DashNav>
  )
}

export default UserNavbar
