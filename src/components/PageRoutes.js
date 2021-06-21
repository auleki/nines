import { Switch, Route } from 'react-router-dom'
import StoreFront from '../layouts/StoreFront'
import Login from '../layouts/Login'
import Landing from '../layouts/Landing'
import NotFound from '../layouts/NotFound'
import Navbar from '../layouts/Navbar'
import UserProfile from '../layouts/UserProfile'
// import { AppContainer } from '../components/styledComponents'

const PageRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/store' component={StoreFront} />
        <Route path='/profile' component={UserProfile} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}
export default PageRoutes
