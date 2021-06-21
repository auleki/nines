import {
  SplitPage,
  DashNav,
  BasicPage,
  DashPage
} from '../components/styledComponents'
import UserNavbar from '../components/UserNavbar'
import StoreFront from '../layouts/StoreFront'

const Favorites = () => {
  return (
    <SplitPage>
      <UserNavbar />
      <DashPage>
        {/* <h1>Favorites Page</h1> */}
        <StoreFront />
      </DashPage>
    </SplitPage>
  )
}

export default Favorites
