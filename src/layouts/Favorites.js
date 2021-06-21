import {
  SplitPage,
  DashNav,
  BasicPage,
  DashPage
} from '../components/styledComponents'
import UserNavbar from '../components/UserNavbar'

const Favorites = () => {
  return (
    <SplitPage>
      <UserNavbar />
      <DashPage>
        <h1>Settings Page</h1>
      </DashPage>
    </SplitPage>
  )
}

export default Favorites
