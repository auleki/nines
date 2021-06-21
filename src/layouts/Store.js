import { Link as NavLink } from 'react-router-dom'
import {
  BasicPage,
  SplitPage,
  DashNav,
  DashPage
} from '../components/styledComponents'
import { icons } from '../components/constants'
import UserNavbar from '../components/UserNavbar'
import StoreFront from './StoreFront'

const Store = () => {
  return (
    <SplitPage>
      <UserNavbar />
      <DashPage>
        <StoreFront />
      </DashPage>
    </SplitPage>
  )
}

export default Store
