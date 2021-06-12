import { Switch, Route } from 'react-router-dom'
import StoreFront from '../layouts/StoreFront'
import Login from '../layouts/Login'
import Landing from '../layouts/Landing'
import NotFound from '../layouts/NotFound'
import Navbar from '../layouts/Navbar'

const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/login' component={Login} />
      <Route path='/store' component={StoreFront} />
      <Route component={NotFound} />
    </Switch>
  )
}
export default PageRoutes
