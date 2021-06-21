import { Switch, Route } from 'react-router-dom'
import StoreFront from '../layouts/StoreFront'
import Login from '../layouts/Login'
import Landing from '../layouts/Landing'
import NotFound from '../layouts/NotFound'
import Navbar from '../layouts/Navbar'
import UserProfile from '../layouts/UserProfile'
import Settings from '../layouts/Settings'
import Stat from '../layouts/Stat'
import Orders from '../layouts/Orders'
import Favorites from '../layouts/Favorites'
import Store from '../layouts/Store'
// import { AppContainer } from '../components/styledComponents'

const PageRoutes = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* SET A CONDITION HERE TO HAVE A NAVBAR FOR CERTAIN URLS */}
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/store' component={Store} />
        <Route path='/profile' component={UserProfile} />
        <Route path='/stats' component={Stat} />
        <Route path='/orders' component={Orders} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/settings' component={Settings} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}
export default PageRoutes
