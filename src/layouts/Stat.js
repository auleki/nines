import {
  SplitPage,
  DashNav,
  BasicPage,
  DashPage
} from '../components/styledComponents'
import UserNavbar from '../components/UserNavbar'

const Stat = () => {
  return (
    <SplitPage>
      <UserNavbar />
      <BasicPage>
        <h2>Stat Page</h2>
      </BasicPage>
    </SplitPage>
  )
}

export default Stat
