import { Switch, Route } from 'react-router-dom'
import StoreFront from '../layouts/StoreFront'
import Login from '../layouts/Login'
import Landing from '../layouts/Landing'
import NotFound from '../layouts/NotFound'
import Navbar from '../layouts/Navbar'
import UserProfile from '../layouts/UserProfile'
import Settings from '../layouts/Settings'
// import { AppContainer } from '../components/styledComponents'

const PageRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* SET A CONDITION HERE TO HAVE A NAVBAR FOR CERTAIN URLS */}
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/store' component={StoreFront} />
        <Route path='/profile' component={UserProfile} />
        <Route path='/stats' component={UserProfile} />
        <Route path='/orders' component={UserProfile} />
        <Route path='/favorites' component={UserProfile} />
        <Route path='/settings' component={Settings} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}
export default PageRoutes
