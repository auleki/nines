import { NavLink } from 'react-router-dom'
import { DashNav } from '../components/styledComponents'
import { icons } from '../components/constants'

const UserNavbar = () => {
  return (
    <DashNav>
      <NavLink to='/store' className='active'>
        <p>Storefront</p>
        <p>{icons.search}</p>
      </NavLink>
      <NavLink to='/stats' className='active'>
        <p>Stats</p>
        <p>{icons.search}</p>
      </NavLink>
      <NavLink to='/orders'>
        <p>Orders</p>
      </NavLink>

      <NavLink to='/favorites'>
        <p>Favorites</p>
      </NavLink>
      <NavLink to='/settings'>
        <p>Settings</p>
      </NavLink>
    </DashNav>
  )
}

export default UserNavbar
