import { Link as NavLink } from 'react-router-dom'
import { BasicPage, SplitPage, DashNav } from '../components/styledComponents'
import { icons } from '../components/constants'
import UserNavbar from '../components/UserNavbar'
const UserProfile = () => {
  return (
    <SplitPage>
      <UserNavbar />
      <BasicPage>
        <h2>hi</h2>
      </BasicPage>
    </SplitPage>
  )
}

export default UserProfile
