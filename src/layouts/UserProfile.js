import { Link as NavLink } from 'react-router-dom'
import { BasicPage, SplitPage, DashNav } from '../components/styledComponents'
import { icons } from '../components/constants'

const UserProfile = () => {
  return (
    <SplitPage>
      <DashNav>
        <NavLink to='/profile' className='active'>
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
        <NavLink to='/history'>
          <p>History</p>
        </NavLink>
        <NavLink to='/favorites'>
          <p>Favorites</p>
        </NavLink>
        <NavLink to='/settings'>
          <p>Settings</p>
        </NavLink>
      </DashNav>
      <BasicPage>
        <h2>hi</h2>
      </BasicPage>
    </SplitPage>
  )
}

export default UserProfile
